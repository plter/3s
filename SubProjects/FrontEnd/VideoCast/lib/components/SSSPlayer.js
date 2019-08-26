import SSSPlayerTpl from "../html/SSSPlayer.html"
import ArrayBufferToVideoElement from "../pipelines/ArrayBufferToVideoElement"
import Constants from "../Constants";
import MediaStreamBlobToArrayBuffer from "../pipelines/MediaStreamBlobToArrayBuffer";
import StreamSourceTypes from "../enum/StreamSourceTypes";
import RemoteStreamNotSetError from "../errors/RemoteStreamNotSetError";
import LocalStreamNotSetError from "../errors/LocalStreamNotSetError";
import SocketIOEvents from "../events/SocketIOEvents";
import RemoteStreamAlreadyAttached from "../errors/RemoteStreamAlreadyAttached";
import RemoteStreamSocketIDNotSetError from "../errors/RemoteStreamSocketIDNotSetError";

const SSSPlayer = Vue.component("sssplayer", {
    template: SSSPlayerTpl,
    props: ["width", 'height', 'muted'],
    mounted() {
        this.$refs.html5video.muted = this.muted;

        this._arrayBufferToVideoPipeline = new ArrayBufferToVideoElement(this.$refs.html5video);
        this._blobToArrayBufferPipeline = new MediaStreamBlobToArrayBuffer(this._onGotLocalBufferHandler.bind(this));

        this._socketioListeners = {
            onGotRemoteStreamHandler: this._onGotRemoteStreamHandler.bind(this),
            onRemoteRequestRefreshHandler: this._onRemoteRequestRefreshHandler.bind(this)
        };
    },

    data() {
        return {
            /**
             * 是否向服务器推流
             */
            pushStream: false,
            currentStreamSourceType: StreamSourceTypes.LOCAL
        };
    },


    methods: {
        /**
         *
         * @param buffer {ArrayBuffer}
         * @param isFirstPart {Boolean}
         */
        appendBuffer(buffer, isFirstPart = false) {
            try {
                this._arrayBufferToVideoPipeline.appendBuffer(buffer, isFirstPart);
            } catch (e) {
                console.warn(e);
            }
            return this;
        },

        /**
         *
         * @param stream {MediaStream}
         */
        setLocalStream(stream) {
            this._localStream = stream;
            return this;
        },


        attachRemoteStream(socketio) {
            if (this._socketio) {
                throw new RemoteStreamAlreadyAttached();
            }

            this._socketio = socketio;
            this._socketio.on(SocketIOEvents.STREAM, this._socketioListeners.onGotRemoteStreamHandler);
            this._socketio.on(SocketIOEvents.REFRESH, this._socketioListeners.onRemoteRequestRefreshHandler);
            return this;
        },

        detachRemoteStream() {
            if (this._socketio) {
                this._socketio.off(SocketIOEvents.STREAM, this._socketioListeners.onGotRemoteStreamHandler);
                this._socketio.off(SocketIOEvents.REFRESH, this._socketioListeners.onRemoteRequestRefreshHandler);
                this._socketio = null;
            }
            return this;
        },

        refreshLocal() {
            if (this._localStream) {
                if (this._currentMediaRecorder) {
                    this._currentMediaRecorder.ondataavailable = null;
                    this._currentMediaRecorder.stop();
                }

                let mr = this._currentMediaRecorder = new MediaRecorder(this._localStream, {mimeType: Constants.MIME_TYPE});
                mr._isFirstBuffer = true;
                mr.ondataavailable = this._mediaRecorderDataAvailableHandler.bind(this);
                mr.start(Constants.MEDIA_RECORDER_TIME_SLICE);
            } else {
                throw new LocalStreamNotSetError();
            }
            return this;
        },

        refreshRemote() {
            if (this._currentRemoteStreamSocketID) {
                if (this._socketio) {
                    this._socketio.emit(SocketIOEvents.REFRESH, this._currentRemoteStreamSocketID);
                } else {
                    throw new RemoteStreamNotSetError();
                }
            } else {
                throw new RemoteStreamSocketIDNotSetError();
            }
        },

        playLocal() {
            this.currentStreamSourceType = StreamSourceTypes.LOCAL;

            this.refreshLocal();
        },


        playRemote(socketid) {
            this._currentRemoteStreamSocketID = socketid;
            this.currentStreamSourceType = StreamSourceTypes.REMOTE;

            this.refreshRemote();
        },

        _mediaRecorderDataAvailableHandler(e) {
            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);
            e.target._isFirstBuffer = false;
        },

        _onGotLocalBufferHandler(arrayBuffer, isFirstPart) {
            if (this.currentStreamSourceType == StreamSourceTypes.LOCAL) {
                this.appendBuffer(arrayBuffer, isFirstPart);
            }

            if (this.pushStream) {
                if (this._socketio) {
                    this._socketio.emit("stream", arrayBuffer, isFirstPart);
                }
            }
        },

        _onGotRemoteStreamHandler(socketid, arrayBuffer, isFirstPart) {
            if (this.currentStreamSourceType == StreamSourceTypes.REMOTE) {
                if (socketid == this._currentRemoteStreamSocketID) {
                    this.appendBuffer(arrayBuffer, isFirstPart);
                }
            }
        },


        _onRemoteRequestRefreshHandler() {
            if (this._localStream) {
                this.refreshLocal();
            }
        }
    }
});

export default SSSPlayer;
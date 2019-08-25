import SSSPlayerTpl from "../html/SSSPlayer.html"
import ArrayBufferToVideoElement from "../pipelines/ArrayBufferToVideoElement"
import Constants from "../Constants";
import MediaStreamBlobToArrayBuffer from "../pipelines/MediaStreamBlobToArrayBuffer";
import StreamSourceTypes from "../enum/StreamSourceTypes";
import RemoteStreamNotSetError from "../errors/RemoteStreamNotSetError";
import LocalStreamNotSetError from "../errors/LocalStreamNotSetError";
import SocketIOEvents from "../events/SocketIOEvents";

Vue.component("sssplayer", {
    template: SSSPlayerTpl,
    props: ["width", 'height'],
    mounted() {
        this._arrayBufferToVideoPipeline = new ArrayBufferToVideoElement(this.$refs.html5video);
        this._blobToArrayBufferPipeline = new MediaStreamBlobToArrayBuffer(this._onGotLocalBufferHandler.bind(this));
        this._currentStreamSourceType = StreamSourceTypes.LOCAL;
        this._pushStream = false;
    },


    methods: {
        /**
         *
         * @param buffer {ArrayBuffer}
         * @param isFirstPart {Boolean}
         */
        appendBuffer(buffer, isFirstPart = false) {
            this._arrayBufferToVideoPipeline.addBuffer(buffer, isFirstPart);
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

        setRemoteStream(socketio) {
            this._socketio = socketio;
            this._socketio.on(SocketIOEvents.STREAM, this._onGotRemoteStreamHandler.bind(this));
            this._socketio.on(SocketIOEvents.REFRESH, this._onRemoteRequestRefreshHandler.bind(this));
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

        refreshRemote(socketid) {
            if (this._socketio) {
                this._socketio.emit(SocketIOEvents.REFRESH, {socketid: socketid});
            } else {
                throw new RemoteStreamNotSetError();
            }
        },

        playLocal() {
            this._currentStreamSourceType = StreamSourceTypes.LOCAL;

            this.refreshLocal();
        },


        playRemote(socketid) {
            this._currentStreamSourceType = StreamSourceTypes.REMOTE;

            this.refreshRemote(socketid);
        },

        setIfPushStream(value = true) {
            this._pushStream = value;
        },

        _mediaRecorderDataAvailableHandler(e) {
            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);
            e.target._isFirstBuffer = false;
        },

        _onGotLocalBufferHandler(arrayBuffer, isFirstPart) {
            if (this._currentStreamSourceType == StreamSourceTypes.LOCAL) {
                this.appendBuffer(arrayBuffer, isFirstPart);
            }

            if (this._pushStream) {
                if (this._socketio) {
                    this._socketio.emit("stream", arrayBuffer, isFirstPart);
                }
            }
        },

        _onGotRemoteStreamHandler(socketid, arrayBuffer, isFirstPart) {
            if (this._currentStreamSourceType == StreamSourceTypes.REMOTE) {
                this.appendBuffer(arrayBuffer, isFirstPart);
            }
        },


        _onRemoteRequestRefreshHandler() {
            if (this._localStream) {
                this.refreshLocal();
            }
        }
    }
});
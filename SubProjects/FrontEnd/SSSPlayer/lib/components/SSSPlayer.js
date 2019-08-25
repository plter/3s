import SSSPlayerTpl from "../html/SSSPlayer.html"
import ArrayBufferToVideoElement from "../pipelines/ArrayBufferToVideoElement"
import Constants from "../Constants";
import MediaStreamBlobToArrayBuffer from "../pipelines/MediaStreamBlobToArrayBuffer";

Vue.component("sssplayer", {
    template: SSSPlayerTpl,
    props: ["width", 'height'],
    mounted() {
        this._arrayBufferToVideoPipeline = new ArrayBufferToVideoElement(this.$refs.html5video);
        this._blobToArrayBufferPipeline = new MediaStreamBlobToArrayBuffer(this._gotBufferHandler.bind(this));
    },


    methods: {
        /**
         *
         * @param buffer {ArrayBuffer}
         * @param isFirstPart {Boolean}
         */
        appendBuffer(buffer, isFirstPart = false) {
            this._arrayBufferToVideoPipeline.addBuffer(buffer, isFirstPart);
        },

        /**
         *
         * @param stream {MediaStream}
         */
        setLocalStream(stream) {
            this._localStream = stream;
            return this;
        },

        refresh() {
            if (this._currentMediaRecorder) {
                this._currentMediaRecorder.ondataavailable = null;
                this._currentMediaRecorder.stop();
            }

            let mr = this._currentMediaRecorder = new MediaRecorder(this._localStream, {mimeType: Constants.MIME_TYPE});
            mr._isFirstBuffer = true;
            mr.ondataavailable = this._mediaRecorderDataAvailableHandler.bind(this);
            mr.start(200);
            return this;
        },

        _mediaRecorderDataAvailableHandler(e) {
            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);
            e.target._isFirstBuffer = false;
        },

        _gotBufferHandler(arrayBuffer, isFirstPart) {
            this.appendBuffer(arrayBuffer, isFirstPart);
        },
    }
});
import ViewHTML5MediaRecordDataAsStream from "../html/ViewHTML5MediaRecordDataAsStream.html"
import ArrayBufferToVideoElement from "../pipelines/ArrayBufferToVideoElement";
import Constants from "../Constants";
import MediaStreamBlobToArrayBuffer from "../pipelines/MediaStreamBlobToArrayBuffer"

Vue.component("viewhtml5mediarecorddataasstream", {
    template: ViewHTML5MediaRecordDataAsStream,
    created() {

    },

    mounted() {
        this._pipeline = new ArrayBufferToVideoElement(this.$refs.preview);
        this._blobToArrayBufferPipeline = new MediaStreamBlobToArrayBuffer(this.gotBufferHandler.bind(this));

        this._asyncInit();
    },

    methods: {
        btnRefreshClickedHandler(e) {
            if (this._currentMediaRecorder) {
                this._currentMediaRecorder.ondataavailable = null;
                this._currentMediaRecorder.stop();
            }

            let mr = this._currentMediaRecorder = new MediaRecorder(this._stream, {mimeType: Constants.MIME_TYPE});
            mr._isFirstBuffer = true;
            mr.ondataavailable = this.mediaRecorderDataAvailableHandler.bind(this);
            mr.start(100);
        },

        mediaRecorderDataAvailableHandler(e) {
            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);
            e.target._isFirstBuffer = false;
        },

        gotBufferHandler(arrayBuffer, isFirstPart) {
            this._pipeline.addBuffer(arrayBuffer, isFirstPart);
        },

        async _asyncInit() {
            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});

            this.btnRefreshClickedHandler();
        }
    }
});
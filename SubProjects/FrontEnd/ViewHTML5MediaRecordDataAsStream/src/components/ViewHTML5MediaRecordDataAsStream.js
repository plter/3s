import ViewHTML5MediaRecordDataAsStream from "../html/ViewHTML5MediaRecordDataAsStream.html"
import ArrayBufferToVideoElement from "../pipelines/ArrayBufferToVideoElement";
import Constants from "../Constants";
import MediaStreamBlobToArrayBuffer from "../pipelines/MediaStreamBlobToArrayBuffer"
import Tools from "../tools"

Vue.component("viewhtml5mediarecorddataasstream", {
    template: ViewHTML5MediaRecordDataAsStream,
    created() {

    },

    mounted() {
        this._pipeline = new ArrayBufferToVideoElement(this.$refs.preview);
        this._blobToArrayBufferPipeline = new MediaStreamBlobToArrayBuffer(this._gotBufferHandler.bind(this));

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
            mr.ondataavailable = this._mediaRecorderDataAvailableHandler.bind(this);
            mr.start(200);
        },

        _mediaRecorderDataAvailableHandler(e) {
            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);
            e.target._isFirstBuffer = false;
        },

        _gotBufferHandler(arrayBuffer, isFirstPart) {
            this._pipeline.addBuffer(arrayBuffer, isFirstPart);
        },

        async _asyncInit() {
            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});

            await Tools.sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。
            this.btnRefreshClickedHandler();
        }
    }
});
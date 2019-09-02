import ViewHTML5MediaRecordDataAsStream from "../html/ViewHTML5MediaRecordDataAsStream.html"
import Constants from "../Constants";
import ArrayBufferToVideoElement from "../../../lib/pipelines/ArrayBufferToVideoElement";
import MediaStreamBlobToArrayBuffer from "../../../lib/pipelines/MediaStreamBlobToArrayBuffer";
import Tools from "../tools";

Vue.component("viewhtml5mediarecorddataasstream", {
    template: ViewHTML5MediaRecordDataAsStream,
    created() {
    },

    data() {
        return {
            recording: false,
        }
    },

    mounted() {
        this._pipeline = new ArrayBufferToVideoElement(this.$refs.preview);
        this._blobToArrayBufferPipeline = new MediaStreamBlobToArrayBuffer(this._onGotLocalBufferHandler.bind(this));

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
            this.recording = true;
        },

        _mediaRecorderDataAvailableHandler(e) {
            this._blobToArrayBufferPipeline.appendBlob(e.data, e.target._isFirstBuffer);
            e.target._isFirstBuffer = false;
        },

        _onGotLocalBufferHandler(arrayBuffer, isFirstPart) {
            this._pipeline.appendBuffer(arrayBuffer, isFirstPart);
        },

        async _asyncInit() {
            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});

            await Tools.sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。
            this.btnRefreshClickedHandler();
        },

        btnPauseClickedHandler(e) {
            if (this._currentMediaRecorder) {
                this._currentMediaRecorder.pause();
            }
            this.recording = false;
        },

        btnResumeClickedHandler(e) {
            if (this._currentMediaRecorder) {
                this._currentMediaRecorder.resume();
            }
            this.recording = true;
        }
    },
});
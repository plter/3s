import ViewHTML5MediaRecordDataAsStream from "../html/ViewHTML5MediaRecordDataAsStream.html"
import MediaStreamPipeline from "../MediaStreamPipeline";
import tools from "../tools";
import Constants from "../Constants";

Vue.component("viewhtml5mediarecorddataasstream", {
    template: ViewHTML5MediaRecordDataAsStream,
    created() {

    },

    mounted() {
        this._pipeline = new MediaStreamPipeline(this.$refs.preview);

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
            mr.ondataavailable = async e => {
                let buffer = await tools.blobToArrayBuffer(e.data);
                this._pipeline.addBuffer(buffer, e.target._isFirstBuffer);
                e.target._isFirstBuffer = false;
            };
            mr.start(150);
        },

        async _asyncInit() {
            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});

            this.btnRefreshClickedHandler();
        }
    }
});
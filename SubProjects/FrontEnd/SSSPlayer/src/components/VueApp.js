import VueApp from "../html/VueApp.html"
import "../../lib/components/SSSPlayer"
import Tools from "../../lib/tools";

Vue.component("vueapp", {
    template: VueApp,
    mounted() {
        this._asyncInit();
    },

    methods: {
        btnRefreshClickedHandler(e) {
            this.$refs.player.refresh();
        },

        async _asyncInit() {
            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
            this.$refs.player.setLocalStream(this._stream);

            await Tools.sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。
            this.$refs.player.refresh();
        }
    }
});
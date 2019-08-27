import StreamPlayerTmp from "../html/StreamPlayer.html"
import StreamSourceTypes from "../../../lib/enum/StreamSourceTypes";

const StreamPlayer = Vue.component("stream-player", {
    template: StreamPlayerTmp,
    props: ['title', 'width', 'height', 'muted'],

    data() {
        return {pushStream: false}
    },

    methods: {
        btnRefreshClickedHandler() {
            if (this.$refs.player.currentStreamSourceType == StreamSourceTypes.LOCAL) {
                this.$refs.player.refreshLocal();
            } else {
                this.$refs.player.refreshRemote();
            }
        },


        getSSSPlayer() {
            return this.$refs.player;
        }
    },


    watch: {
        pushStream(val, oldVal) {
            this.$refs.player.pushStream = val;
        }
    }
});

export default StreamPlayer;
import StreamPlayerTmp from "../html/StreamPlayer.html"

const StreamPlayer = Vue.component("stream-player", {
    template: StreamPlayerTmp,
    props: ['title', 'width', 'height', 'muted'],

    data() {
        return {pushStream: false}
    },

    methods: {
        btnRefreshClickedHandler() {
            this.$refs.player.refreshRemote();
        },

        attachRemoteStream(socketio) {
            this.$refs.player.attachRemoteStream(socketio);
        },

        playRemote(socketid) {
            this.$refs.player.playRemote(socketid);
        },

        detachRemoteStream() {
            this.$refs.player.detachRemoteStream();
        },

        setLocalStream(stream) {
            this.$refs.player.setLocalStream(stream);
        },

        playLocal() {
            this.$refs.player.playLocal();
        }
    },


    watch: {
        pushStream(val, oldVal) {
            this.$refs.player.pushStream = val;
        }
    }
});

export default StreamPlayer;
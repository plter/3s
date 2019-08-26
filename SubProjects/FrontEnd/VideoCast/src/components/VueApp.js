import VueApp from "../html/VueApp.html"
import "../../lib/components/SSSPlayer"
import Tools from "../../lib/tools";
import "../css/style.css"
import SocketIOEvents from "../../lib/events/SocketIOEvents";
import StreamPlayer from "./StreamPlayer";

Vue.component("vueapp", {
    template: VueApp,
    mounted() {
        this._remotePlayerList = new Map();
        this._socketio = io(location.host, {path: "/video_cast_server"});
        this._socketio.on(SocketIOEvents.CLIENT_LIST, this._onClientListHandler.bind(this));

        this._asyncInit();
    },

    methods: {
        btnRefreshClickedHandler(e) {
            this.$refs.localPlayer.refreshLocal();
        },

        _onClientListHandler(clientList) {
            let oldList = this._remotePlayerList;
            this._remotePlayerList = new Map();

            clientList.forEach(socketid => {
                if (socketid != this._socketio.id) {
                    if (oldList.has(socketid)) {
                        this._remotePlayerList.set(socketid, oldList.get(socketid));
                        oldList.delete(socketid);
                    } else {
                        let player = new StreamPlayer({
                            propsData: {
                                width: 320,
                                height: 240,
                                title: socketid
                            }
                        });
                        this._remotePlayerList.set(socketid, player);
                        let el = document.createElement("div");
                        this.$refs.remotePlayerContainer.appendChild(el);
                        player.$mount(el);
                        player.getSSSPlayer().attachRemoteStream(this._socketio);
                        player.getSSSPlayer().playRemote(socketid);
                    }
                }
            });

            for (let [socketid, player] of oldList) {
                if (player.$el.parentNode) {
                    player.getSSSPlayer().detachRemoteStream();
                    player.$el.parentNode.removeChild(player.$el);
                    player.$destroy();
                }
            }

            oldList.clear();
        },

        async _asyncInit() {
            /**
             * @type {MediaStream}
             * @private
             */
            this._stream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
            this.$refs.localStreamPreview.srcObject = this._stream;

            await Tools.sleep(1000);//在Firefox中，不休眠会出现一些问题，可能是因为HTMLVideoElement元素未初始化完成所导致。

            let player = this.$refs.localPlayer.getSSSPlayer();
            player.setLocalStream(this._stream);
            player.playLocal();
            player.attachRemoteStream(this._socketio);
            player.pushStream = true;
        }
    }
});
import ChatTpl from "../html/chat.html"

Vue.component("chat", {
    template: ChatTpl,
    created() {
        this.socket = io(window.location.host, {path: "/chat_server"});
        this.socket.on("chat", this.chatHandler);
    },
    data() {
        return {
            input: "",
            output: ""
        }
    },

    methods: {
        async chatHandler(data) {
            this.output = this.output + "\n" + data;
            await this.$nextTick();
            this.$refs.output.scrollTop = this.$refs.output.scrollHeight;
        },

        /**
         *
         * @param e {KeyboardEvent}
         */
        inputKeyUpHandler(e) {
            if (e.key == "Enter") {
                this.socket.emit("chat", this.input);
                this.input = "";
            }
        }
    }
});
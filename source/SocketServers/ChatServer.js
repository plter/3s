const SocketIO = require("socket.io");

function config(server) {
    let io = SocketIO(server, {path: "/chat_server"});

    io.on("connection", socket => {
        socket.on("chat", data => {
            io.emit('chat', data);
        });
    });
}

module.exports = {config: config};
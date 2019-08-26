const SocketIO = require("socket.io");


function config(server) {
    let io = SocketIO(server, {path: "/video_cast_server"});

    io.on("connection", socket => {

        function broadcastClientList() {
            io.of("/").clients((error, clients) => {
                if (!error) {
                    io.emit("clientList", clients);
                    console.log(clients);
                }
            });
        }

        broadcastClientList();

        socket.on("stream", (arrayBuffer, isFirstPart) => {
            io.emit("stream", socket.id, arrayBuffer, isFirstPart);
        });

        socket.on("refresh", targetSocketId => {
            io.to(targetSocketId).emit("refresh");
        });

        socket.on("disconnect", reason => {
            broadcastClientList();
        });
    });
}

module.exports = {config: config};
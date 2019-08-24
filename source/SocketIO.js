const SocketIO = require("socket.io");

function configWithExpress(server) {
    const io = SocketIO(server);

    io.on("connection", socket => {
        //TODO
    });
}

module.exports = {configWithExpress: configWithExpress};
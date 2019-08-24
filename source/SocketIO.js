const SocketIO = require("socket.io");
const ChatServer = require("./SocketServers/ChatServer");

function configWithExpress(server) {
    ChatServer.config(server);
}

module.exports = {configWithExpress: configWithExpress};
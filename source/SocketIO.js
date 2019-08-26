const SocketIO = require("socket.io");
const ChatServer = require("./SocketServers/ChatServer");
const VideoCastServer = require("./SocketServers/VideoCastServer");

function configWithExpress(server) {
    ChatServer.config(server);
    VideoCastServer.config(server);
}

module.exports = {configWithExpress: configWithExpress};
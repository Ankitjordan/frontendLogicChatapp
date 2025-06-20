import { io } from "socket.io-client";

const socket = io("https://backendchat-production-8200.up.railway.app", {
  autoConnect: false,
});

export default socket;

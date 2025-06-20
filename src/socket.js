// socket.js
import { io } from "socket.io-client";

const socket = io("http://172.20.10.9:4000", {
  autoConnect: false, // optional, you can control connection
});

export default socket;

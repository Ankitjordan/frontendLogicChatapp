// socket.js
import { io } from "socket.io-client";

const socket = io("https://backendchat-kappa.vercel.app/", {
  autoConnect: false, // optional, you can control connection
});

export default socket;

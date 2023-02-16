import { io } from "socket.io-client";
import { v4 } from "uuid";
const options = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 1000,
  transports: ["websocket"],
};

const socket = io(":3001", options);

export default socket;

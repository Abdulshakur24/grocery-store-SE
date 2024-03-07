import { io } from "socket.io-client";

function connectToSocket() {
  return io(import.meta.env.VITE_BACKEND_URL || "http://localhost:8070", {
    transports: ["websocket", "polling"],
  });
}

export { connectToSocket };

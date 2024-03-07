import { Socket, Server as SocketIO } from "socket.io";
import { Server } from "http";
import { socketAutoLogin } from "../sockets/socketControllers";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

let io: SocketIO | null = null;

export const initIO = (httpServer: Server): SocketIO => {
  if (io) {
    console.warn("Socket IO is already initialized");
    return io;
  }

  io = new SocketIO(httpServer, {
    cors: {
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
    },
  });

  io.on(
    "connection",
    async (
      socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
    ) => {
      console.log("Client Connected");

      socketAutoLogin(socket, io);

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });

      socket.on("connect_error", (err) => {
        console.log(`connect_error due to ${err.message}`);
      });
    }
  );

  return io;
};

export const getIO = (): SocketIO => {
  if (!io) {
    throw new Error("Socket IO is not initialized");
  }
  return io;
};

import { User } from "@prisma/client";
import { verifyToken } from "../utils/verifyToken";
import { prisma } from "../db";
import { blacklistFilter } from "../utils/helper";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Socket, Server as SocketIO } from "socket.io";

export const socketAutoLogin = (
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>,
  io: SocketIO<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> | null
) => {
  socket.on("try-login", async ({ token }) => {
    try {
      const userFromToken = (await verifyToken(token)) as User;
      const user = await prisma.user.findUnique({
        where: { userId: userFromToken.userId },
      });

      if (user) {
        if (io) {
          io.emit("user-login", {
            status: "success",
            user: blacklistFilter(user, ["password"]),
          });
        }
      } else {
        io?.emit("user-login", {
          status: "failed",
        });
      }
    } catch (err: any) {
      console.log(err.message);
      if (io) {
        io.emit("user-login", {
          status: "failed",
          message: "Session expired. Please login again.",
        });
      }
    }
  });
};

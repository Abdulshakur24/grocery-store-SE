import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/verifyToken";
import { getIO } from "../utils/socket";
import { decode } from "jsonwebtoken";

type payloadType = {
  userId: number;
  exp: number;
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization as string;

  if (typeof authHeader !== "string") {
    console.log("Authorization header missing");
    return res.status(401).send({ message: "Header is missing." });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer") {
    return res.status(401).send({ message: "Invalid token!" });
  }

  if (!token) {
    console.log("Authorization header missing");
    return res.status(401).send({ message: "Token is required!" });
  }

  try {
    const payload = (await verifyToken(token)) as payloadType;
    req.userID = payload.userId;

    return next();
  } catch (err: any) {
    const io = getIO();

    const payload = decode(token) as payloadType;
    io.emit(`${payload.userId}-user-update`, {
      type: "error",
      user: null,
      message: "Session expired, please login again.",
    });

    return res.status(403).send({ message: "Invalid token." });
  }
};

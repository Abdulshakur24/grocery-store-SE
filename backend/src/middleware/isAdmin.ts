import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userID;
    const user = await prisma.user.findUnique({ where: { userId } });

    if (user && (user.role === "admin" || user.role === "owner")) {
      return next();
    } else {
      return res
        .status(403)
        .send({ message: "Operation is only accessible by Admin." });
    }
  } catch (err: any) {
    console.error("Error: ", err.message);
    return res.status(403).send({ message: "Authentication failed." });
  }
};

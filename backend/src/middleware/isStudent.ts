import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export const isStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userID;
    const user = await prisma.user.findUnique({ where: { userId } });

    if (user && user.role === "student") {
      return next();
    } else {
      return res
        .status(403)
        .send({ message: "Operation is only accessible by a student." });
    }
  } catch (err: any) {
    console.error("Error: ", err.message);
    return res.status(403).send({ message: "Authentication failed." });
  }
};

import { NextFunction, Request, Response } from "express";
import { prisma } from "../db";

export const isInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userID;
    const user = await prisma.user.findUnique({ where: { userId } });

    if (user && user.role === "instructor") {
      return next();
    } else {
      return res
        .status(403)
        .send({ message: "Access is only accessible by an instructor." });
    }
  } catch (err: any) {
    console.error("Error: ", err.message);
    return res.status(403).send({ message: "Authentication failed." });
  }
};

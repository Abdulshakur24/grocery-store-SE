import { Request, Response } from "express";
import { prisma } from "../db/index";
import * as Yup from "yup";
import { blacklistFilter, hashPassword, verifyPassword } from "../utils/helper";
import { createToken } from "../utils/createToken";
import { getIO } from "../utils/socket";
import fs from "fs";
import { UserStatus } from "@prisma/client";

export const signInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.sendStatus(401);
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || (await verifyPassword(password, user.password))) {
      return res.status(403).send({ message: "Invalid Credentials" });
    }

    const tokenPayload = {
      userId: user.userId,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
    };

    const token = createToken(tokenPayload, 1);

    const safelyBlackListedUser = blacklistFilter(user, ["password"]);

    return res.send({
      user: { ...safelyBlackListedUser, token },
    });
  } catch (err: any) {
    return res.status(403).send({ message: err.message });
  }
};

export const updateUserProfileInfo = async (req: Request, res: Response) => {
  const userId = req.userID;

  const data = req.body;

  const registrationForm = Yup.object({
    first_name: Yup.string().min(2).required("Please enter your first name."),
    last_name: Yup.string(),
  });

  try {
    await registrationForm.validate(data);

    const updatedUser = await prisma.user.update({
      where: { userId },
      data,
    });

    const io = getIO();
    io.emit(`${userId}-user-update`, {
      user: blacklistFilter(updatedUser, ["password"]),
    });

    return res.sendStatus(200);
  } catch (err: any) {
    console.log(err);
    return res.status(403).send({ message: err.errors });
  }
};

export const updateUserProfileStatus = async (req: Request, res: Response) => {
  const userId = req.userID;

  const { status }: { status: string } = req.body;

  if (!status) return res.status(403).send({ message: "Status is missing." });

  const userStatus =
    UserStatus[status.toUpperCase() as keyof typeof UserStatus];

  if (!userStatus)
    return res.status(403).send({ message: "Invalid status value." });

  try {
    const updatedUser = await prisma.user.update({
      where: { userId },
      data: { status: userStatus },
    });
    const io = getIO();
    io.emit(`${userId}-user-update`, {
      user: blacklistFilter(updatedUser, ["password"]),
    });
    return res.sendStatus(200);
  } catch (err: any) {
    console.log(err);
    return res.status(403).send({ message: err.errors });
  }
};

export const updateUserProfilePic = async (req: Request, res: Response) => {
  const userId = req.userID;

  console.log(userId);
  const user = await prisma.user.findUnique({ where: { userId } });
  if (user?.profilePic) {
    try {
      const filePath = `./public/images/${userId}/${user.profilePic}`;
      fs.unlinkSync(filePath);
      console.log(`${user.profilePic} successfully deleted from storage.`);
    } catch (error) {
      console.error(error);
    }
  }

  const file = req.file as Express.Multer.File;

  const profileFileUrl = file.filename;

  const updatedUser = await prisma.user.update({
    where: { userId },
    data: { profilePic: profileFileUrl },
  });

  const io = getIO();
  io.emit(`${userId}-user-update`, {
    user: blacklistFilter(updatedUser, ["password"]),
  });

  return res.sendStatus(200);
};

export const deletePic = async (req: Request, res: Response) => {
  const userId = req.userID;

  const user = await prisma.user.findUnique({ where: { userId } });
  if (user?.profilePic) {
    try {
      fs.unlinkSync(`./public/images/${userId}/${user.profilePic}`);
      console.log(`${user.profilePic} successfully deleted from storage.`);
    } catch (error) {
      console.error(error);
      return res.sendStatus(405);
    }
  }

  const updatedUser = await prisma.user.update({
    where: { userId },
    data: { profilePic: null },
  });

  const io = getIO();
  io.emit(`${userId}-user-update`, {
    user: blacklistFilter(updatedUser, ["password"]),
  });

  return res.sendStatus(200);
};

export const updateUserPassword = async (req: Request, res: Response) => {
  const userId = req.userID;

  const { currentPassword, newPassword } = req.body;

  if (!(currentPassword && newPassword)) {
    return res.status(403).send({ message: "Missing password fields." });
  }

  try {
    const user = await prisma.user.findUnique({ where: { userId } });

    if (!user || (await verifyPassword(currentPassword, user.password))) {
      return res.status(403).send({ message: "Incorrect password" });
    }

    const hashedPassword = await hashPassword(newPassword);

    await prisma.user.update({
      where: { userId },
      data: { password: hashedPassword },
    });

    return res.sendStatus(200);
  } catch (err: any) {
    return res.status(403).send({ message: err.errors });
  }
};

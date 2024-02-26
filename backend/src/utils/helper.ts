import { randomBytes, pbkdf2Sync } from "crypto";
import { verifyToken } from "./verifyToken";
import path from "path";
import fs from "fs";
import { prisma } from "../db";
import { Request } from "express";

const ITERATIONS = 2048;
const KEY_LENGTH = 32;
const DIGEST = "sha512";

/**
 * @param password
 * @returns
 */

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const hash = pbkdf2Sync(
    password,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    DIGEST
  ).toString("hex");
  return [salt, hash].join("$");
}

/**
 * @param password
 * @param hashedPassword
 * @returns
 */

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const [salt, hash] = hashedPassword.split("$");
  const hashed = pbkdf2Sync(
    password,
    salt,
    ITERATIONS,
    KEY_LENGTH,
    DIGEST
  ).toString("hex");
  return hash !== hashed;
}

export const extractUserIDFromToken = async (
  token: string
): Promise<string | null> => {
  const decoded = await verifyToken(token);
  if (!decoded || typeof decoded === "string") return null;
  return decoded.id;
};

export const blacklistFilter = <T extends object>(
  obj: T,
  blacklist: (keyof T)[]
): Partial<T> =>
  Object.entries(obj)
    .filter(([key, _]) => !blacklist.includes(key as keyof T))
    .reduce(
      (obj: Partial<T>, [key, value]) => ((obj[key as keyof T] = value), obj),
      {}
    );

export const getDirectorySize = async (dir: string): Promise<number> => {
  const files = await fs.promises.readdir(dir);
  const sizes = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);
      if (stats.isFile()) {
        return stats.size;
      }
      if (stats.isDirectory()) {
        return getDirectorySize(filePath);
      }
      return 0;
    })
  );

  return sizes.reduce((total, current) => total + current, 0);
};

export async function getAllUsers() {
  return prisma.user.findMany({
    select: {
      userId: true,
      email: true,
      username: true,
      first_name: true,
      last_name: true,
      last_login: true,
      created_at: true,
      updated_at: true,
      role: true,
    },
  });
}

export const extractToken = async (req: Request) => {
  const authHeader = req.headers.authorization as string;
  return authHeader[1];
};

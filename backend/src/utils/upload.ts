import path from "path";
import multer, { FileFilterCallback, StorageEngine } from "multer";
import { Request } from "express";
import fs from "fs";
import { videoMimeTypes } from "../types";

const getUserDirectory = async (
  req: Request,
  subfolder: string
): Promise<string> => {
  const userId = req.userID;
  const dirPath = path.resolve(
    __dirname,
    "..",
    "..",
    "public",
    subfolder,
    `${userId}`
  );

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  return dirPath;
};

const createStorage = (subfolder: string): StorageEngine => {
  return multer.diskStorage({
    destination: async (req, file, cb) => {
      const dirPath = await getUserDirectory(req, subfolder);
      cb(null, dirPath);
    },
    filename(req, file, cb) {
      const fileName = new Date().getTime() + path.extname(file.originalname);
      cb(null, fileName);
    },
  });
};

export const fileHandler = {
  fileFilter: (req: Request, file: any, cb: any) => {
    // Define the allowed MIME types
    const allowedMimeTypes = new Set([
      "application/pdf", // for PDF files
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // for DOCX files
      "application/vnd.openxmlformats-officedocument.presentationml.presentation", // for PPTX files
      // Add more MIME types if needed
    ]);

    if (allowedMimeTypes.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Unsupported file format!"), false);
    }
  },
  storage: multer.diskStorage({
    destination: async (req, file, cb) => {
      const userId = req.userID;
      const dirPath = path.resolve(
        __dirname,
        "..",
        "..",
        "public",
        "instructor-files",
        `${userId}`
      );

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      cb(null, dirPath);
    },
    filename(req, file, cb) {
      const fileName = new Date().getTime() + path.extname(file.originalname);
      cb(null, fileName);
    },
  }),
};

export const pictureHandler = {
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Error: Invalid image format!"));
    }
  },
  storage: createStorage("images"),
};

export const videoHandler = {
  directory: path.resolve(__dirname, "..", "..", "public", "videos"),
  limits: {
    fileSize: 2 * 1024 * 1024 * 1024, // 2GB
  },
  fileFilter: (
    req: Request,
    file: Express.Multer.File,
    cb: FileFilterCallback
  ) => {
    if (videoMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Error: Invalid video format"));
    }
  },
  storage: createStorage("videos"),
};

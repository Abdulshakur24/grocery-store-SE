import { Router } from "express";
import * as userController from "../controllers/userController";
import { pictureHandler } from "../utils/upload";
import multer from "multer";
import { isAuthenticated } from "../middleware/isAuth";
import rateLimit from "express-rate-limit";

const upload = multer(pictureHandler);

const userRouter = Router();

const passwordRateLimitOptions = {
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "Too many password change attempts. Please try again later.",
};

const limitPasswordFrequenceChange = rateLimit(passwordRateLimitOptions);

userRouter.use("/password", limitPasswordFrequenceChange);

userRouter.post("/login", userController.signInUser);
userRouter.post("/register", userController.signUpUser);

userRouter.use(isAuthenticated);

userRouter.put("/info", userController.updateUserProfileInfo);

userRouter.put("/status", userController.updateUserProfileStatus);

userRouter.put("/password", userController.updateUserPassword);

userRouter.put(
  "/pic",
  upload.single("profileImage"),
  (req, res, next) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    next();
  },
  userController.updateUserProfilePic
);

userRouter.delete("/pic", userController.deletePic);

export default userRouter;

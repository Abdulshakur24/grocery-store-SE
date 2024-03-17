import { Router } from "express";
import userRoutes from "./user";
import checkoutRoutes from "./checkout";

export default Router()
  .use("/user", userRoutes)
  .use("/checkout", checkoutRoutes);

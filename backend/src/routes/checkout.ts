import { Router } from "express";
import * as checkoutController from "../controllers/checkoutController";
import { isAuthenticated } from "../middleware/isAuth";

const checkoutRouter = Router();

checkoutRouter.use(isAuthenticated);

checkoutRouter.get("/history", checkoutController.orderHistory);
checkoutRouter.post("/purchase", checkoutController.checkOut);

export default checkoutRouter;

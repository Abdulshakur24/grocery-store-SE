import { Request, Response } from "express";
import { prisma } from "../db/index";

export const checkOut = async (req: Request, res: Response) => {
  try {
    const { info, cart } = req.body;
    const userID = req.userID;

    const totalAmount = cart.reduce(
      (acc: any, { price, quantity }: any) =>
        acc + parseInt(price.replace("Ksh.", "")) * quantity,
      0
    );

    const order = await prisma.order.create({
      data: {
        userId: userID,
        shippingAddress: info.shippingAddress,
        totalAmount: totalAmount,
        status: "Shipped",
      },
    });

    for (const item of cart) {
      console.log(item, order.orderID);
      await prisma.orderDetail.create({
        data: {
          orderId: order.orderID,
          productId: 1,
          quantity: item.quantity,
          priceAtPurchase: parseInt(item.price.replace("Ksh.", "")),
        },
      });
    }

    return res.send({ message: "Order placed successfully", order });
  } catch (err: any) {
    console.log(err);
    return res.status(403).send({ message: err.message });
  }
};

export const orderHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.userID;

    const orders = await prisma.order.findMany({
      where: { userId },
      orderBy: { orderDate: "desc" },
      include: {
        orderDetails: true,
      },
    });

    return res.json({ orders });
  } catch (err: any) {
    return res.status(500).send({ message: err.message });
  }
};

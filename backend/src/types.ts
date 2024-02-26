export type UserType = Partial<{
  id: number;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}>;

export type ProfileType = {
  id: number;
  avatar?: string;
  bio?: string;
  userId: number;
};

export type AddressType = {
  id: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  userId: number;
};

export type OrderType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  status: OrderStatusEnum;
  items?: OrderItemType[];
};

export type OrderItemType = {
  id: number;
  productId: number;
  orderId: number;
  quantity: number;
};

export type ReviewType = {
  id: number;
  content: string;
  rating: number;
  productId: number;
  userId: number;
};

export enum OrderStatusEnum {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

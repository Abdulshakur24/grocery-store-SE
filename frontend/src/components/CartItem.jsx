import React from "react";
import { handleQuantity } from "../redux/slicers/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ id, img, name, price, quantity, coupon }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between">
      <div className="w-full flex items-center gap-2">
        <img className="w-[64px] rounded" src={`/${img}`} alt={name} />
        <div className="">
          <h1 className="m-0 text-[0.9375rem]">{name}</h1>
          <p className="m-0 ">{price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-200 select-none">
        <div
          className="flex items-center justify-center h-[32px] w-6 cursor-pointer"
          onClick={() => dispatch(handleQuantity({ action: "decrement", id }))}
        >
          -
        </div>
        <p className="m-0 flex justify-center w-[20px]">{quantity}</p>
        <div
          className="flex items-center justify-center h-[32px] w-6 cursor-pointer"
          onClick={() => dispatch(handleQuantity({ action: "increment", id }))}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default CartItem;

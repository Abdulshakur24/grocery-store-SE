import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slicers/cartSlice";
import CartItem from "./CartItem";
import useModal from "../hooks/useModal";

function CartModal({ navigator }) {
  const { cart } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const { toggleModal } = useModal();

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, { price, quantity }) =>
        acc + parseInt(price.replace("Ksh.", "")) * quantity,
      0
    );
  };

  return (
    <div
      className="bg-white w-full flex flex-col items-start max-w-[400px] overflow-auto h-[400px] mt-[77px] mr-[50px] shadow-2xl rounded p-3"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="m-0">Cart</h3>
      <div className="flex flex-col gap-[0.5rem] w-full">
        <div className="w-full flex flex-col gap-4 h-screen max-h-[239px] no-scrollbar overflow-auto border-y py-3">
          {cart.length === 0 ? (
            <div className="flex items-center justify-center">
              <h4 className="text-gray-500 mt-6">Cart is empty</h4>
            </div>
          ) : null}
          {cart.map(({ id, img, name, price, quantity }) => (
            <CartItem key={id} {...{ id, name, img, price, quantity }} />
          ))}
        </div>
        <div className="flex flex-col w-full gap-1 items-center justify-between">
          <div className="w-full">
            <h4 className="text-sm">
              Total: Ksh {getTotalPrice().toLocaleString()}
            </h4>
          </div>
          <div className="flex w-full gap-4 items-center justify-between">
            <button
              className="w-full bg-green-700 text-white disabled:cursor-not-allowed disabled:opacity-45"
              onClick={() => dispatch(clearCart())}
              disabled={cart.length === 0}
            >
              Clear All
            </button>
            <button
              className="w-full bg-green-700 text-white disabled:cursor-not-allowed disabled:opacity-45"
              disabled={cart.length === 0}
              onClick={() => {
                navigator("/checkout");
                toggleModal(false);
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;

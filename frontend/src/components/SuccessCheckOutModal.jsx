import React from "react";
import useModal from "../hooks/useModal";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { head } from "lodash";
import { clearCart } from "../redux/slicers/cartSlice";

function SuccessCheckOutModal({ navigator }) {
  const { isOpen, toggleModal } = useModal();
  const { cart } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  const firstItem = head(cart);
  console.log(firstItem);

  const getTotalPrice = () => {
    return cart.reduce(
      (acc, { price, quantity }) =>
        acc + parseInt(price.replace("Ksh.", "")) * quantity,
      0
    );
  };

  return (
    <>
      <div
        className="bg-white w-full max-w-2xl p-3 rounded m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <IoCheckmarkDoneCircle className="size-[64px] fill-green-500 mb-2" />
        <div className="">
          <h4>THANK YOU</h4>
          <h4>FOR YOUR ORDER</h4>
        </div>
        <p className="p">You will receive an email confirmation shortly.</p>
        <div className="flex flex-col sm:flex-row ">
          <div className="w-full flex flex-col bg-gray-100 p-3">
            {cart.length ? (
              <div className="flex gap-2 justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={firstItem.img}
                    className="w-[64px] rounded"
                    alt=""
                  />

                  <div className="flex flex-col">
                    <h4 className="text-[16px]">{firstItem.name}</h4>
                    <p>{firstItem.price.toLocaleString()}</p>
                  </div>
                </div>
                <h6 className="m-0">x{firstItem.quantity}</h6>
              </div>
            ) : (
              <p className="">Your Cart is Empty.</p>
            )}
            <div className="border-t border-gray-300 pt-2">
              {cart.length ? (
                <p className="m-0 p-0">and {cart.length - 1} other item(s)</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="w-full sm:w-[50%] bg-green-600 p-2 flex flex-col justify-center items-start ">
            <h4 className="text-white">GRAND TOTAL</h4>
            <h5 className="text-white">
              Ksh{" "}
              {getTotalPrice() ? (getTotalPrice() + 50).toLocaleString() : 0}
            </h5>
          </div>
        </div>

        <button
          className="bg-green-600 text-white w-full mt-3 font-bold"
          onClick={() => {
            dispatch(clearCart());
            toggleModal(false);
            navigator("/");
          }}
        >
          Back To Home
        </button>
      </div>
    </>
  );
}

export default SuccessCheckOutModal;

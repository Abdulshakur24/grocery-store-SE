import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slicers/cartSlice";

import useModal from "../../hooks/useModal";
import CartItem from "../../components/CartItem";

function CheckoutCart({ navigator }) {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

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
      className={`w-full sticky transition-all p-4 bg-  ${
        headerFixed ? "top-[92px]" : "top-[0px]"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="">Your Cart</h3>
      <div className="flex flex-col gap-[0.5rem] w-full">
        <div className="w-full flex flex-col gap-4 h-screen max-h-[250px] no-scrollbar overflow-auto border-y py-3">
          {cart.length === 0 ? (
            <div className="flex items-center justify-center">
              <h4 className="text-gray-500 mt-6">Cart is empty</h4>
            </div>
          ) : null}
          {cart.map(({ id, img, name, price, quantity }) => (
            <CartItem key={id} {...{ id, name, img, price, quantity }} />
          ))}
        </div>
        <div className=" flex flex-row p-3 justify-end">
          {/* Coupon */}
          <div className="discount-code ">
            <input
              type="text"
              placeholder="Enter Discount Code"
              // onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className=" py-2 px-6 ml-3 font-medium bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Apply
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1 items-center justify-between">
          <div className="w-full">
            <h4 className="text-md">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCart;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductDisplay = ({ item }) => {
  const { name, id, price, ratingsCount, quantity, desc, img } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
        id:id,
        img:img,
        name:name,
        price:price,
        quantity:prequantity,
        coupon:coupon
    }
    const existingCart =JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = existingCart.findIndex((item) => item.id ===id);

    if(existingProductIndex !== -1) {
        existingCart[existingProductIndex].quantity += prequantity;
    } else{
        existingCart.push(product);
    }
    // update local storage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    //reset form fields
    setQuantity(1);
    setCoupon('');
  }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} reviews</span>
        </p>
        <h4>{price}</h4>
        <p>{desc}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Cart */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>
          {/* Coupon */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          {/* Button */}
          <button type="submit" className="lab-btn">
            <span>Add To Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-black">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;

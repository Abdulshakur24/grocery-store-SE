import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slicers/cartSlice";

const ProductCard = ({ gridList, slug, products }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? "grid" : "list"
      }`}
    >
      {products.map((product, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div className="product-item">
            {/* Product Images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
              {/* produuct  action links */}
              <div className="product-action-link">
                <Link to={`/${slug}/${product.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                {/* <a href="#">
                  <i className="icofont-heart"></i>
                </a> */}
                <Link
                  onClick={() => {
                    console.log(product);
                    dispatch(addItem(product));
                  }}
                >
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>
            {/* Product Content */}
            <div className="product-content">
              <h5>
                <Link to={`/${slug}/${product.id}`}>{product.name}</Link>
              </h5>
              <p>
                <span className="rating">
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                </span>
              </p>
              <h6>{product.price}</h6>
            </div>
          </div>
          {/* List Style */}
          <div className="product-list-item">
            {/* Product Images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={product.img} alt="" />
              </div>
              {/* produuct  action links */}
              <div className="product-action-link">
                <Link to={`/${slug}/${product.id}`}>
                  {" "}
                  <i className="icofont-eye"></i>
                </Link>
                {/* <a href="#">
                  <i className="icofont-heart"></i>
                </a> */}
                <Link
                  onClick={() => {
                    console.log(product);
                    dispatch(addItem(product));
                  }}
                >
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>
            {/* Product Content */}
            <div className="product-content">
              <h5>
                <Link to={`/${slug}/${product.id}`}>{product.name}</Link>
              </h5>
              <p>
                <span className="rating">
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                  <i className="icofont-ui-rating"></i>
                </span>
              </p>
              <h6>{product.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

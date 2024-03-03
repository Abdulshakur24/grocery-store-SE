import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductDisplay from "./ProductDisplay";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsData, setProductsData] = useState([]); // Add a state for the whole dataset
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handle = async () => {
      const data = await import("/src/products.json").then(
        (data) => data.default
      );
      setProductsData(data); // Store the fetched data

      const product = data.find((p) => p.id === id) || {};
      setProduct(product);
      setCurrentIndex(data.findIndex((p) => p.id === id));
    };

    handle();
  }, [id]);

  const navigateTo = (offset) => {
    const newIndex = Math.max(
      0,
      Math.min(currentIndex + offset, productsData.length - 1) // Use productsData for bounds
    );

    if (productsData[newIndex]) {
      const nextProductId = productsData[newIndex].id;
      setCurrentIndex(newIndex);
      navigate(`/fruits/${nextProductId}`);
    }
  };

  return (
    <div>
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper className="mySwiper">
                            <SwiperSlide key={product.id}>
                              <div className="single-thumb">
                                <img src={`/${product.img}`} alt="" />
                              </div>
                            </SwiperSlide>
                          </Swiper>
                          <div
                            className="pro-single-next"
                            onClick={() => navigateTo(-1)}
                          >
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div
                            className="pro-single-prev"
                            onClick={() => navigateTo(1)}
                          >
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <ProductDisplay key={product.id} item={product} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

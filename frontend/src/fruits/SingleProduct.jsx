import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Data from '../products.json'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ProductDisplay from './ProductDisplay';

const SingleProduct = () => {
  const [product,setProduct] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
  }, [])
  
  const result =product.filter((p) => p.id === id);
  
  return (
    <div>
      <div className='shop-single padding-tb aside-bg'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                <div className='product-details'>
                  <div className='row align-items-center'>
                    <div className='col-md-6 col-12'>
                      <div className='product-thumb'>
                        <div className='swiper-container pro-single-top'>
                        <Swiper className="mySwiper">
                          {
                            product.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className='single-thumb'>
                                <img src={item.img} alt='' />
                                </div>
                              </SwiperSlide>
                            ))
                          }
                        </Swiper>
                        <div className='pro-single-next'>
                          <i className='icofont-rounded-left'></i>
                        </div>
                        <div className='pro-single-prev'>
                          <i className='icofont-rounded-right'></i>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-6 col-12'>
                      <div className='post-content'>
                        {
                          result.map(item => <ProductDisplay key={item.id} item={item}/>)
                        }
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
  )
}

export default SingleProduct
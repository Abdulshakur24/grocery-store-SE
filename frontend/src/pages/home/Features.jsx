import React from "react";
import freeDelivery from "../../assets/images/features/free-delivery.png";
import saveIcon from "../../assets/images/features/save.png";
import promotion from "../../assets/images/features/promotions.png";
import orderOnline from "../../assets/images/features/order-online.png";
import support from "../../assets/images/features/support.png";

const Features = () => {
  return (
    <>
      <section id="features" className="sectionp">
        <div className="fe-box">
          <img src={freeDelivery} />
          <h6>Free Delivery</h6>
        </div>
        <div className="fe-box">
          <img src={saveIcon} />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={promotion} />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={orderOnline} />
          <h6>Order Online</h6>
        </div>
        <div className="fe-box">
          <img src={support} />
          <h6>Support</h6>
        </div>
      </section>
    </>
  );
};

export default Features;

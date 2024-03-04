import React from "react";
import HomeCategory from "../home/HomeCategory";
import PageHeader from "../../components/PageHeader";

const Shop = () => {
  return (
    <div>
      <PageHeader
        title="Shop Page"
        curPage="Shop"
        backgroundImage="src/assets/images/pageheader/shop-header.jpg"
      />
      <HomeCategory />
    </div>
  );
};

export default Shop;

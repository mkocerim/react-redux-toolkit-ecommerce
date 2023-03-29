import React from "react";
import Category from "../../components/category/category";
import Order from "../../components/hero/order";
import Slider from "../../components/hero/slider";
import Product from "../../components/product/product";

const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  );
};

export default Home;

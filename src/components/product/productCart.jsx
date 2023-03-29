import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ id, cover, name, price }) => {
  return (
    <>
      <div className="box boxItem" id="product">
        <div className="img">
          <Link>
            <img src={cover} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCart;

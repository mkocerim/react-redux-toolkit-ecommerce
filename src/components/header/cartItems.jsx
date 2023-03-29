import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="img">
            <img src={cover} alt="" />
            <button className="remove flexCenter">
              <AiOutlineClose />
            </button>
          </div>
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="minus">
                  <AiOutlineMinus />
                </button>
                <button className="num">1{quantity}</button>
                <button className="plus">
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="priceTitle">${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;

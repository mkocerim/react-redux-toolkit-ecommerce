import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const incCartItems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  const descCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

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
                <button className="minus" onClick={descCartItems}>
                  <AiOutlineMinus />
                </button>
                <button className="num">{quantity}</button>
                <button className="plus" onClick={incCartItems}>
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

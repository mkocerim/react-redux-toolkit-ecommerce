import React from "react";
import image from "../../assets/images/input.png";
import "./account.css";

const Account = () => {
  return (
    <>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                <input type="file" accept="image/*" src={image} alt="imgs" />
                <img src={image} alt="" className="image-preview" />
              </div>
            </div>
            <div className="right">
              <span>Username </span>
              <input type="text" required />
              <span>Email</span>
              <input type="text" required />
              <span>Password *</span>
              <input type="text" required />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;

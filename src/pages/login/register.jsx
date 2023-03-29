import React from "react";
import Footer from "../../components/footer/footer";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";
import "./login.css";

const Register = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>
          <form action="">
            <span>Email Address</span>
            <input type="text" required />
            <span>Username * </span>
            <input type="text" required />
            <span>Password *</span>
            <input type="text" required />
            <span>Confirm Password *</span>
            <input type="text" required />
            <button className="button">Register</button>
            <Link to="/login">Sign in</Link>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;

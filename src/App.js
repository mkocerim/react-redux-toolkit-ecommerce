import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/login/register";
import Login from "./pages/login/login";
import Account from "./pages/account/account";
import { useSelector } from "react-redux";

function App() {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  return (
    <>
      <BrowserRouter>
        <Header />
        {isLoggIn ? (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/account" Component={Account} />
          </Routes>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "../components/home";
import { Product } from "../components/product";
import { Signup } from "../components/signup";
import { Login } from "../components/login";
import { Cart } from "../components/cart";
import { Navbar } from "../components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

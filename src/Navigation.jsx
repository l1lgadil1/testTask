import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/Home";
import Cart from "./screens/Cart";

function Navigation() {
  return (
    <div className="container mx-auto my-32 bg-white rounded-md">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
    </div>
  );
}

export default Navigation;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import TcgSecure from "./projects/tcgSecure/tcgSecure"
import Shop from './projects/tcgSecure/shop'
import Login from './projects/tcgSecure/login'
import Cart from './projects/tcgSecure/cart'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/tcgsecure"
          element={<TcgSecure />}
        />
        <Route
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
  </>
  );
}

export default App;

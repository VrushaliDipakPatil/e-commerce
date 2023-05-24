import React from "react";
import Home from "./pages/Home";
import {  Route, Routes } from "../node_modules/react-router-dom/dist/index";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import Login from "./pages/Login";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/product/:id" element={<Product/>} />
  </Routes>
  );
}





export default App;

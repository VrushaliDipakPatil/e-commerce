import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {


  return (
   <div>
    <Header/>
    <Banner/>
    <Products/>
    <Footer/>
   </div>
  );
};



export default Home;

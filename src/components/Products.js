import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import axios from "../../node_modules/axios/index";

const Products = () => {

  const [productdata, setproductData] = useState([])

  useEffect(()=>{
    productsData();
  },[])

  async function productsData(){
    const products = await axios.get(
      "https://fakestoreapiserver.reactbd.com/products"
      );
      setproductData(products.data);
      return products;      
  }

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mi
          condimentum, sagittis mauris vel, ultricies mauris. Etiam faucibus,
          velit eu finibus sodales, metus enim viverra velit, nec pellentesque
          sem ipsum vel lectus.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
       {
        productdata.map((item)=>(
          <ProductsCard key={item._id} productdata={item} />
        ))
       }
      </div>
    </div>
  );
};

export default Products;

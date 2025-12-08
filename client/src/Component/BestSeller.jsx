import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../Content/AppContext";

const BestSeller = () => {
  const { product } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 m-6">
        {product.filter((product)=>product.inStock).slice(0,5).map((product,index)=>(
          <ProductCard 
          key={index}
          product={product}/>
        ))

        }
        
      </div>
    </div>
  );
};

export default BestSeller;

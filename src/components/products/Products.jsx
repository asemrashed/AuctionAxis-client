import React from "react";
import {Link} from 'react-router'
import ProductCard from "./ProductCard";

const Products = ({products, heading}) => {
  return (
    <section className="w-full max-w-[1600px] mx-auto py-8 md:py-12 px-6">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 text-black">
          {heading}{" "}
          <span className="bg-gradient-to-br from-purple-700 to-primary bg-clip-text text-transparent">
            Products
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products &&
            products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default Products;

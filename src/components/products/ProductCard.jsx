import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200 flex flex-col justify-between gap-3 hover:-translate-y-1 duration-200">
      <div className="w-full h-60 bg-gray-200 rounded-md" />
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>
      <div className="flex items-center justify-between text-base lg:text-lg font-semibold text-purple-600">
        <p>
            {" "}
            <span className="text-black">price :</span> ${product.price_min}- ${product.price_max}
        </p>
        <p>
            {product.condition}
        </p>
      </div>
      <Link to={`/products/${product._id}`} className="w-full py-2 outlined-btn rounded transition text-center font-semibold">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;

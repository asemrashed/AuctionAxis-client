import React, { useRef } from "react";
import { Link } from "react-router";
import NewBid from "./NewBid";
import useAuth from "../../hooks/useAuth";

export default function ProductDetails({ product }) {
  const {user} = useAuth();
  const modalRef = useRef()
  const handleModalOpen=()=>{
    modalRef.current.showModal()
  }
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Image */}
      <div className="flex flex-col items-center justify-cneter gap-3 md:gap-5">
        <div className="w-full bg-white rounded-lg h-[400px] flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <div className="bg-gray-300 w-full h-full rounded-lg" />
          )}
        </div>
        {/* Product Description */}
        <div className="w-full hidden md:flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Product Description
          </h2>
          <div className="flex items-center justify-between gap-4text-sm text-gray-700">
            <p className="font-bold text-base">
              <span className="text-purple-600">Condition:</span>{" "}
              {product.condition}
            </p>
            <p className="font-bold text-base">
              <span className="text-purple-600">Usage Time:</span>{" "}
              {product.usage}
            </p>
          </div>
          <hr />
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>

      {/* Right Title Section */}
      <div className="flex flex-col gap-3 md:gap-5">
        <div>
          <div className="flex items-center justify-between">
            <div className="inline-block px-3 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm uppercase">
              {product.category}
            </div>
            <Link
              to="/products"
              className="text-gray-700 font-bold inline-flex items-center gap-1 outline-1 rounded-full px-2 hover:bg-purple-100"
            >
              <span className="text-lg">&#8592;</span>
              <span>Back To Products</span>
            </Link>
          </div>
          <h1 className="mt-2 font-bold text-[32px] lg:text-[48px] text-gray-900">
            {product.title}
          </h1>
        </div>
        {/* Price */}
        <div className="bg-white rounded-md p-6">
          <p className="text-green-600 font-semibold text-2xl md:text-3xl">
            $ {product.price_min} - {product.price_max}
          </p>
          <p className="text-gray-500">Price starts from</p>
        </div>

        {/* Product Description */}
        <div className="w-full flex md:hidden flex-col gap-4 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Product Description
          </h2>
          <div className="flex items-center justify-between gap-4text-sm text-gray-700">
            <p className="font-bold text-base">
              <span className="text-purple-600">Condition:</span>{" "}
              {product.condition}
            </p>
            <p className="font-bold text-base">
              <span className="text-purple-600">Usage Time:</span>{" "}
              {product.usage}
            </p>
          </div>
          <hr />
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-md p-6">
          <h3 className="font-semibold text-xl md:text-2xl text-gray-900 mb-4">
            Product Details
          </h3>
          <p className="text-gray-700 font-semibold md:text-base mb-2">
            <span className="font-bold">Product ID:</span> {product._id}
          </p>
          <p className="text-gray-700 font-semibold md:text-base">
            <span className="font-bold">Posted:</span>{" "}
            {new Date(product.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Seller Information */}
        {product.seller_name && (
          <div className="bg-white rounded-md p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl md:text-2xl text-gray-900">
              Seller Information
            </h3>
            <div className="flex items-center space-x-4">
              <img
                src={product.seller_image}
                alt={product.seller_name}
                className={`${product.seller_image? '': 'blur-xs'} w-14 h-14 rounded-full object-cover border`}
              />
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {product.seller_name}
                </p>
                <p className="text-gray-600 text-sm">{product.email || <span className="blur-xs"> abcdefg@gmail.com</span>}</p>
              </div>
            </div>
            <p className=" text-gray-600 text-sm md:text-base font-semibold">
              <span className="font-bold">Location:</span> {product.location}
            </p>
            <p className="text-gray-600 text-sm md:text-base font-semibold break-all">
              <span className="font-bold">Contact:</span>{" "}
              {product.seller_contact || <span className="blur-xs"> +880 2343 24234</span>}
            </p>
            <p>
              <span className="font-bold text-gray-600">Status:</span>{" "}
              <span
                className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${
                  product.status === "pending"
                    ? "bg-yellow-400"
                    : product.status === "approved"
                    ? "bg-green-500"
                    : "bg-gray-400"
                }`}
              >
                {product.status}
              </span>
            </p>
          </div>
        </div>
        )}
        {/* Button */}
        {user ? (
          <button
          onClick={handleModalOpen}
          className={` ${product.status === 'sold'? 'btn-disabled bg-gray-400 cursor-not-allowed' :'primary-btn'} w-full rounded-lg text-white py-3 text-center text-lg`}>
          {product.status === 'sold'? 'Sold': 'Bid on This Product'}
        </button>
        ):(
          <Link to={'/auth/login'} className="btn btn-secondary">
            Login to bid
          </Link>
        )}
        {/* Bid Modal */}
        <NewBid modalRef={modalRef}/>
      </div>
    </div>
  );
}

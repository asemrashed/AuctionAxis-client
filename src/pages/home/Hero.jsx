import React from "react";
import leftVec from "../../assets/bg-hero-left.png";
import rightVec from "../../assets/bg-hero-right.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto py-20 px-6 overflow-hidden 
      bg-gradient-to-br from-[#e4cefa] via-[#e8f2ff] to-[#c0e5f9]">

      {/* Left Vector */}
      <img
        src={leftVec}
        alt="Left vector"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] opacity-40 md:opacity-60 pointer-events-none select-none"
      />

      {/* Right Vector */}
      <img
        src={rightVec}
        alt="Right vector"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] opacity-40 md:opacity-60 pointer-events-none select-none"
      />

      <div className="relative z-2 text-center max-w-3xl mx-auto">
        <h1 className="font-extrabold text-4xl md:text-6xl leading-tight text-gray-900">
          Deal Your{' '}
          <span className="bg-gradient-to-br from-purple-700 to-purple-400 bg-clip-text text-transparent">
            Products
          </span>{' '}
          In A{' '}
          <span className="bg-gradient-to-br from-purple-700 to-purple-400 bg-clip-text text-transparent">
            Smart
          </span>{' '}
          Way!
        </h1>

        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-8 w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search For Products, Catagories..."
            className="flex-1 py-3 px-4 rounded-l-full border text-black placeholder-gray-400 outline-none border-purple-500 "
          />
          <button className="px-6 rounded-r-full primary-btn">
            <FaSearch className="text-xl md:text-2xl"/>
          </button>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Link to={'/products'} className="px-6 py-3 rounded-full primary-btn transition">
            Watch All Products
          </Link>
          <Link to={'/createProduct'} className="px-6 py-3 rounded-full outlined-btn transition">
            Post an Product
          </Link>
        </div>
      </div>
    </section>
  );
}

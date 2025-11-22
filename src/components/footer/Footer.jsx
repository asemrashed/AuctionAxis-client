import React from "react";
import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-[#001931] text-white px-5 py-4 md:py-9">
      <footer className="max-w-[1440px] mx-auto footer flex flex-col md:flex-row items-center md:items-start justify-between pb-5 md:pb-9 [&_h6]:text-white text-white/60 border-b border-[#E5E7EB] gap-2 md:gap-15">
        <aside className="flex-2 flex flex-col items-center md:items-start">
          {/* Logo as Link to home */}
          <Link to={'/'} className="-mt-1 text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-purple-700 to-purple-400 bg-clip-text text-transparent">AuctionAxis</Link>
          <p className="text-center md:text-left">
            Your trusted marketplace for authentic local products. Discover the best deals from across Bangladesh.
          </p>
        </aside>
        <nav className="flex-1 flex flex-col items-center md:items-start">
          <h6 className="text-lg md:text-xl">Quick Links</h6>
          <Link to="/products" className="link link-hover">All Products</Link>
          <Link to="#" className="link link-hover">Dashboard</Link>
          <Link to="/auth/login" className="link link-hover">Login</Link>
          <Link to="/auth/register" className="link link-hover">Register</Link>
        </nav>
        <nav className="flex-1 flex flex-col items-center md:items-start">
          <h6 className="text-lg md:text-xl">Categories</h6>
          <Link to="#" className="link link-hover">Electronics</Link>
          <Link to="#" className="link link-hover">Fashion</Link>
          <Link to="#" className="link link-hover">Home & Living</Link>
          <Link to="#" className="link link-hover">Groceries</Link>
        </nav>
        <nav className="flex-1 flex flex-col items-center md:items-start">
          <h6 className="text-lg md:text-xl">Contact & Support</h6>
          <Link to="#" className="link link-hover">support@smartdeals.com</Link>
          <Link to="#" className="link link-hover">+880 123 456 789</Link>
          <Link to="#" className="link link-hover">123 Commerce Street, <br/> Dhaka, Bangladesh</Link>
        </nav>
        <nav className="flex-1 flex flex-col items-center md:items-start">
          <h6 className="text-lg md:text-xl">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to="#">
              <TiSocialTwitter className="bg-white rounded-full text-black text-2xl md:text-4xl"/>
            </Link>
            <Link to="#">
              <TiSocialLinkedin className="bg-white rounded-full text-black text-2xl md:text-4xl"/>
            </Link>
            <Link to="#">
              <TiSocialFacebook className="bg-white rounded-full text-black text-2xl md:text-4xl"/>
            </Link>
          </div>
        </nav>
      </footer>
      <div className="flex items-center justify-center text-sm pt-5 md:pt-9 text-gray-300">
        © 2025 SmartDeals - All right reserved
      </div>
    </div>
  );
};

export default Footer;
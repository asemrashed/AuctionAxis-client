import React from "react";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import MyBidsCard from "../../components/bidCards/MyBidsCard";

const MyBids = () => {
  const { user, loading } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user) {
      const email = user.email;
      fetch(`http://localhost:5000/bids/?user_email=${email}`)
        .then(res => res.json())
        .then(data => {
          setBids(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [user]);

  if (loading) {
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto bg-white py-5 md:py-10 px-3 md:px-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800">My Bids :<span className="text-primary"> {bids.length}</span></h1>
      <div>
        {/* Header */}
        <div className="hidden md:grid grid-cols-[60px_2fr_2fr_1fr_1fr_1fr] items-center px-4 py-3 bg-gray-100 font-semibold text-gray-600 text-sm">
          <span>SL No</span>
          <span>Product</span>
          <span>Seller</span>
          <span>Bid Price</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {/* Body */}
        {bids.length > 0 ? (
            bids.map((bid, index) => (
            <MyBidsCard 
              key={bid._id} 
              bid={bid} 
              bids={bids}
              setBids={setBids}
              index={index + 1} 
            />
            ))
        ) : (
            <p className="text-center text-gray-500 py-5">
            No bids found for this product.
            </p>
        )}
      </div>
    </div>
  );
};

export default MyBids;

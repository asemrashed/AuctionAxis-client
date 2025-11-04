import React, { use } from 'react';
import BidsCard from '../../components/bidCards/BidsCard';
import { BidContext } from '../../context/bidContext';

const ProductBids = () => {
  const {bids} = use(BidContext)
  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5">
        Bids For This Product:{" "}
        <span className="text-purple-500">
          {String(bids.length).padStart(2, "0")}
        </span>
      </h2>

      <div className="bg-white rounded-lg overflow-hidden w-full">
        {/* Header */}
        <div className="hidden md:grid grid-cols-[60px_2fr_2fr_1fr_1.5fr] items-center px-4 py-3 bg-gray-100 font-semibold text-gray-600 text-sm">
          <span>SL No</span>
          <span>Product</span>
          <span>Seller</span>
          <span>Bid Price</span>
          <span>Actions</span>
        </div>

        {/* Body */}
        {bids.length > 0 ? (
          bids
            .sort((pre, next)=> next.bid_price - pre.bid_price)
            .map((bid, index) => (
            <BidsCard
              key={bid._id}
              bid={bid}
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

export default ProductBids;
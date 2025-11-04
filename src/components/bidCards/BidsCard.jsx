import React, { use } from "react";
import { BidContext } from "../../context/bidContext";

const BidsCard = ({ bid, index }) => {
  const {product} = use(BidContext);

  const handleAcceptBid =()=>{
    if(product.status !== 'sold'){
      fetch(`http://localhost:5000/products/${product._id}`,{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({status: "sold"})
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err =>{
          console.log(err)
        })
        // updating bid status
      fetch(`http://localhost:5000/bids/${bid._id}`,{
        method:"PATCH",
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify({status: 'approved'})
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
        .catch(err =>{
          console.log(err)
        })
    }
  }
  return (
    <div className="grid md:grid-cols-[60px_2fr_2fr_1fr_1.5fr] grid-cols-2 md:items-center items-start border-b border-gray-200 px-4 py-3 hover:bg-gray-50 transition">
      {/* Serial */}
      <span className="font-semibold my-auto order-1 text-gray-700">{index}.</span>

      {/* Product */}
      <div className="flex items-center order-3 md:order-2 gap-3 mt-2 md:mt-0">
        <div className="bg-gray-300 rounded-md">
          <img src={product.image} alt={product.title} className="w-8 h-8" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{product.title}</p>
          <p className="text-xs text-gray-500">${product.price_max}</p>
        </div>
      </div>

      {/* Seller */}
      <div className="flex flex-row-reverse md:flex-row items-center order-4 md:order-3 gap-3 mt-2 md:mt-0">
        <img
          src={bid.buyer_image}
          alt={bid.buyer_name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{bid.buyer_name}</p>
          <p className="text-xs text-gray-500">{bid.buyer_email}</p>
        </div>
      </div>

      {/* Bid Price */}
    <span className="font-bold text-right md:text-left order-2 md:order-4 text-gray-900 mt-2 md:mt-0">$ {bid.bid_price}</span>

      {/* Actions */}
      <div className="flex col-span-2 md:col-span-1 order-5 gap-2 mt-3 md:mt-0">
        {bid.status === 'approved'? 
          <p className="text-primary font-semibold text-base md:text-lg bg-purple-300 w-full px-3 py-2 rounded-full text-center">sold to {bid.buyer_name}</p>:
          <>
          <button onClick={handleAcceptBid} className="accept-btn w-full  cursor-pointer rounded border border-green-500 text-green-500 px-3 py-1 text-sm hover:bg-green-50 transition">
          Accept Offer
        </button>
        <button className="reject-btn w-full  cursor-pointer rounded border border-red-400 text-red-400 px-3 py-1 text-sm hover:bg-red-50 transition">
          Reject Offer
        </button>
        </>
        }
      </div>
    </div>
  );
};

export default BidsCard;

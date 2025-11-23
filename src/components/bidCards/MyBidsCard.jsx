import React from "react";
import Swal from 'sweetalert2'
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBidsCard = ({ bid, bids, setBids, index }) => {
  const {loading }= use(AuthContext)
  const [product, setProduct] = useState([])
  const {productId} = bid
  const axios = useAxios()
  const secureAxios = useAxiosSecure()
  useEffect(()=>{
    axios.get(`/products/${productId}`)
    .then(res =>{
      setProduct(res.data)
    })
  },[productId, axios])
  
  if(loading){
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }

  const handleDelete=()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
    secureAxios.delete(`/bids/${bid._id}`)
          .then(res =>{
            if(res.data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const currBids = bids.filter(b => b._id !== bid._id)
              setBids(currBids)
            }
          })
        console.log('Bid deleted')
      }
    });
  }


  return (
    <div className="border-b border-gray-200 px-4 py-3 hover:bg-gray-50 transition 
      grid grid-cols-2 gap-3 
      md:grid-cols-[60px_2fr_2fr_1fr_1fr_1fr] md:items-center">

      {/* Row 1 - Index */}
      <span className="font-semibold my-auto text-gray-700 order-1">{index}.</span>

      {/* Row 1 - Price */}
      <span className="font-bold text-gray-900 justify-end order-2 md:order-4 text-right md:text-left">
        ${bid.bid_price}
      </span>

      {/* Row 2 - Product */}
      <div className="flex items-center gap-3 order-3 md:order-2">
        <div className="bg-gray-300 rounded-lg">
          <img src={product.image} alt={product.title} className="w-10 h-8 object-cover"/>
        </div>
        <div>
          <Link to={`/products/${product._id}`} className="font-bold text-primary">{product.title}</Link>
          <p className="text-xs md:text-sm text-gray-500">${product.price_min} - {product.price_max}</p>
        </div>
      </div>

      {/* Row 2 - Seller */}
      <div className="flex flex-row-reverse md:flex-row justify-start gap-3 order-4 md:order-3">
        <img
          src={product.seller_image}
          alt={product.seller_name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{product.seller_name}</p>
          <p className="text-xs md:text-sm text-gray-500">{product.email}</p>
        </div>
      </div>

      {/* Row 3 - Status */}
      <div className="order-5 flex justify-start md:order-5">
        <button className={`btn ${bid.status === 'approved' ? 'btn-success':'btn-warning'} rounded-xl btn-sm`}>
          {bid.status || "Pending"}
        </button>
      </div>

      {/* Row 3 - Remove Button */}
      <div className="flex justify-end md:justify-start order-6 md:order-6">
        <button onClick={handleDelete} className="btn btn-sm md:btn-md btn-outline btn-error rounded hover:text-white border px-3 py-1 transition">
          Remove Bid
        </button>
      </div>

    </div>
  );
};

export default MyBidsCard;

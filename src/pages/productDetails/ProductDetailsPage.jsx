import React, { Suspense, useEffect, useMemo, useState } from "react";
import ProductDetails from "./ProductDetails";
import { useLoaderData } from "react-router";
import ProductBids from "./ProductBids";
import { AuthContext } from "../../context/AuthContext";
import { BidContext } from "../../context/bidContext";
//  import { ToastContainer, toast } from 'react-toastify';

const ProductDetailsPage = () => {
  const [bids, setBids] = useState([]);
  const product = useLoaderData();

  //   const successMsg = () => toast.success("Bid placed successfully");
  //   const errorMsg = () => toast.error('Unable to bid');

  useEffect(() => {
    fetch(`http://localhost:5000/bids/?productId=${product._id}`)
      .then(res => res.json())
      .then(data => {
        setBids(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [product._id]);

  const bidInfo = useMemo(
    () => ({
      bids,
      setBids,
      product,
    }),
    [bids, product]
  );

  return (
    <div className="w-full max-w-[1660px] mx-auto bg-[#D9D9D9] min-h-screen py-10 px-4">
      <BidContext value={bidInfo}>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <ProductDetails product={product} />
        </Suspense>
        {/* {user.displayName !== product?.seller_name)?  */}
        <ProductBids/>
        {/* } */}
        {/* <ToastContainer position="top-center"/> */}
      </BidContext>
    </div>
  );
};

export default ProductDetailsPage;

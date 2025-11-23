import React, { Suspense, use, useEffect, useMemo, useState } from "react";
import ProductDetails from "./ProductDetails";
import { useLoaderData } from "react-router";
import ProductBids from "./ProductBids";
import { AuthContext } from "../../context/AuthContext";
import { BidContext } from "../../context/bidContext";
import useAxios from "../../hooks/useAxios";

const ProductDetailsPage = () => {
  const { user, loading } = use(AuthContext);
  const [bids, setBids] = useState([]);
  const productData = useLoaderData();
  const [product, setProduct] = useState(productData)
  const axios = useAxios();

  useEffect(() => {
    if (user) {
      axios(`/bids/${product._id}`).then(res => {
        setBids(res.data);
      });
    }
  }, [product._id, user, axios]);

  const bidInfo = useMemo(
    () => ({
      bids,
      setBids,
      product,
      setProduct
    }),
    [bids, product]
  );

  if (loading) {
    return (
      <div className="text-2xl text-primary font-semibold flex items-center justify-center gap-5 w-full h-[50vh] bg-white">
        Loading
        <span className="loading loading-primary loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1660px] mx-auto bg-[#D9D9D9] min-h-screen py-10 px-4">
      <BidContext value={bidInfo}>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <ProductDetails product={product} />
          <ProductBids />
        </Suspense>
      </BidContext>
    </div>
  );
};

export default ProductDetailsPage;

import React, { Suspense } from "react";
import HeroSection from "./Hero";
import LatestProducts from "../../components/products/Products";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <HeroSection />
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <div className="bg-white pb-10">
          <LatestProducts products={products} heading={"Latest"} />
          <div className="flex justify-center">
            <Link
              to={"/products"}
              className="px-6 py-2 rounded-md primary-btn"
            >
              Show All
            </Link>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default Home;

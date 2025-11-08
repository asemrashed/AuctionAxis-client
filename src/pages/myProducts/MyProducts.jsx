import React, { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import MyProductCard from '../../components/products/MyProductCard';
import { Link } from 'react-router';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        axiosSecure.get('/products/my-products')
        .then(res => {
          setProducts(res.data)
        })
    },[axiosSecure])
    

  return (
    <div className="max-w-[1440px] min-h-[50vh] mx-auto bg-white py-5 md:py-10 px-3 md:px-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-5 text-gray-800">My Products :<span className="text-primary"> {products.length}</span></h1>
      <div>
        {/* Header */}
        <div className={`hidden md:${products.length>0?'grid':'hidden'} grid-cols-[60px_1fr_1.5fr_1fr_1fr_1fr_1.5fr] items-center px-4 py-3 bg-gray-100 font-semibold text-gray-600 text-sm`}>
          <span>SL No</span>
          <span>Image</span>
          <span>Product Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {/* Body */}
        {products.length > 0 ? (
            products.map((product, index) => (
            <MyProductCard
              key={product._id} 
              product={product} 
              products={products}
              setProducts={setProducts}
              index={index + 1} 
            />
            ))
        ) : (
            <div className="text-center text-gray-500 py-5">
                <p>No Products found.</p> <br />
                <Link to={'/createProduct'} className='primary-btn mt-5 md:mt-10 px-4 py-2 rounded-xl'>Add a Product</Link>
            </div>
        )}
      </div>
    </div>
);
};

export default MyProducts;
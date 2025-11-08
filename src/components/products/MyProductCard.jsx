import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyProductCard = ({ product, products, setProducts, index }) => {
  const {loading }= use(AuthContext)
  const secureAxios = useAxiosSecure()
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
        secureAxios.delete(`/products/my-products/${product._id}`)
          .then(res =>{
            if(res.data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const currBids = products.filter( p => p._id !== product._id)
              setProducts(currBids)
            }
          })
        console.log('Bid deleted')
      }
    });
  }


  return (
    <div className="border-b border-gray-300 px-4 py-3 gap-2 md:gap-0 hover:bg-gray-50 transition 
      grid grid-cols-2 
      md:grid-cols-[60px_1fr_1.5fr_1fr_1fr_1fr_1.5fr] md:items-center">

      {/* index */}
      <span className="font-semibold my-auto text-gray-700 order-1">{index}.</span>

      {/* Product image*/}
      <div className="flex row-span-2 md:row-span-1 items-center gap-3 order-3 md:order-2">
        <div className="bg-gray-300 rounded-lg">
          <img src={product.image} alt={product.title} className="w-17 h-10 object-cover"/>
        </div>
      </div>

      {/* Product title*/}
      <div className="flex justify-end md:justify-start items-center gap-3 order-4 md:order-3">
        <div>
          <p className="font-bold text-primary text-lg md:text-xl">{product.title}</p>
        </div>
      </div>

      {/* Category*/}
      <div className="order-5 md:order-4 my-auto">
        <div>
          <p className="font-semibold text-gray-800 text-right md:text-left">{product.category}</p>
        </div>
      </div>
      
      {/* Price */}
      <span className="font-bold text-gray-700 justify-end order-2 md:order-5 text-right md:text-left">
        ${product.price_min} - {product.price_max}
      </span>

      {/* Status */}
      <div className="flex order-6">
        <button className={`btn ${product.status === 'approved' ? 'btn-success':'btn-warning'} rounded-xl btn-sm`}>
          {product.status || "Pending"}
        </button>
      </div>

      {/* Buttons */}
      <div className="flex justify-end md:justify-start gap-1 md:gap-2 order-7">
        {/* <button className="btn btn-outline btn-sm md:btn-md btn-primary rounded border px-3 py-1 transition">
          Edit
        </button> */}
        <button onClick={handleDelete} className="btn btn-outline btn-sm md:btn-md btn-error rounded hover:text-white border px-3 py-1 transition">
          Delete
        </button>
        <Link to={`/products/${product._id}`} className="btn btn-outline btn-sm md:btn-md btn-success hover:text-white rounded border px-3 py-1 transition">
          Make Sold
        </Link>
      </div>

    </div>
  );
};

export default MyProductCard;

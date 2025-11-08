import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const CreateProduct = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
  const handleNewProduct = e => {
    e.preventDefault();
    const title = e.target.title.value
    const category = e.target.category.value
    const price_min = Number(e.target.min_price.value)
    const price_max = Number(e.target.max_price.value)
    const radio = e.target.radio.value
    const usage = e.target.time.value
    const image = e.target.product_img.value
    const description = e.target.description.value
    const seller_name = e.target.name.value
    const email = e.target.email.value
    const seller_contact = e.target.contact.value
    const seller_image = user?.photoURL
    const location = e.target.location.value
    const newProduct = {
        title, 
        category, 
        price_min, 
        price_max, 
        radio,
        usage, 
        image, 
        description,
        seller_name,
        email, 
        seller_contact, 
        seller_image, 
        location,
        status: 'pending'
    }
    console.log(newProduct);
    axiosSecure.post(`http://localhost:5000/products`, newProduct)
    .then(res =>{
        console.log(res.data)
        e.target.reset()
        navigate('/')
    })
  };
//   console.log('user', user)
  return (
    <div className="max-w-[1440px] mx-auto my-5 md:my-10">
      <h1 className="font-bold text-2xl md:text-4xl text-center mb-3">
        Add a <span className="text-main">Product</span>
      </h1>

      <form
        onSubmit={handleNewProduct}
        className="fieldset w-11/12 md:w-1/3 mx-auto flex flex-col gap-2 text-base md:text-lg mt-2 p-5 shadow-sm md:shadow-md shadow-primary rounded-xl"
      >
        <h2 className="text-xl md:text:2xl font-semibold">Product Details</h2><hr/>
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Title</label>
            <input
              name="title"
              type="text"
              className="input w-full mt-1"
              placeholder="Product name"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="">Category</label>
            <select name="category" className="select mt-1">
              <option>Electronics</option>
              <option>Car</option>
              <option>Bike</option>
              <option>Cloth</option>
              <option>Books</option>
              <option>Computer</option>
              <option>Mobile</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Minimum Price</label>
            <input
              name="min_price"
              type="number"
              className="input w-full mt-1"
              placeholder="$$$"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="">Maximum Price</label>
            <input
              name="max_price"
              type="number"
              className="input w-full mt-1"
              placeholder="$$$"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Product Condition</label>
            <div className="flex gap-3 mt-1">
                <input type="radio" name="radio" className="radio radio-primary" value={'used'} defaultChecked/>
                Used
                <input type="radio" name="radio" className="radio radio-primary" value={'brand new'}/>
                Brand New
            </div>
          </div>
          <div className="w-1/2">
            <label className="">Product Usage time</label>
            <input
              name="time"
              type="text"
              className="input w-full mt-1"
              placeholder="1 year, 3 month"
            />
          </div>
        </div>
        <div>
          <label className="img">Image url</label>
          <input
            name="product_img"
            type="text"
            className="input w-full mt-1"
            placeholder="Product image link"
          />
        </div>
        <div>
          <label className="">Product Description</label>
          <textarea 
            name="description"
            type="text"
            className="textarea mt-1 w-full"
            placeholder="Product details..."
          />
        </div>
        {/* your deatails */}
        <h2 className="text-xl md:text:2xl font-semibold">Your Details</h2><hr/>
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Your Name</label>
            <input 
                name="name" 
                type="text" 
                className="input w-full mt-1"
                defaultValue={user.displayName}
                readOnly
            />
          </div>
          <div className="w-1/2">
            <label className="">Your Email</label>
            <input 
                name="email" 
                type="email" 
                className="input w-full mt-1" 
                defaultValue={user.email}
                readOnly
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="contact">Contact Number</label>
            <input
              name="contact"
              type="number"
              className="input w-full mt-1"
              placeholder="+098 765 432 111"
            />
          </div>
        </div>
        <div>
          <label className="img">Location</label>
          <input
            name="location"
            type="text"
            className="input w-full mt-2"
            placeholder="City, Courntry"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="primary-btn rounded-lg px-5 mt-2 py-1.5"
          >
            Add to Auction
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;

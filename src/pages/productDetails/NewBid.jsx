import React, { use, useEffect,useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { BidContext } from "../../context/bidContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const NewBid = ({ modalRef}) => {
  const {product, bids, setBids} = use(BidContext)
  const { user, loading } = use(AuthContext);
  const { _id, price_min, price_max } = product;
  const [highestBid, setHighestBid]= useState(null)
  const secureAxios = useAxiosSecure()

  useEffect(()=>{
    setHighestBid(bids?.[0]?.bid_price ?? null)
  },[bids])
  
  if (loading) {
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }


  const handleSubmit = e => {
    e.preventDefault();
    const buyer_name = e.target.name.value;
    const buyer_email = e.target.email.value;
    const buyer_image = e.target.imgUrl.value;
    const bid_price = e.target.price.value;
    const buyer_contact = e.target.contact.value;
    const productId = _id;
    const currentBid = {
      productId,
      buyer_name,
      buyer_email,
      buyer_contact,
      bid_price,
      buyer_image,
      status: 'pending'
    };
    secureAxios.post("/bids", currentBid)
      .then(res => {
        // console.log("Bid placed successfull", res.data);
        if(res.data.insertedId){
          currentBid._id = res.data.insertedId
          setBids([...bids, currentBid])
          e.target.reset();
          modalRef.current.close();
        }
      })
  };

  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-xl md:text-2xl text-center mb-2">
          Give Seller Your Offered Price
        </h3>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="fieldset w-full flex flex-col gap-2 text-base md:text-lg mt-2"
        >
          <label className="name">Buyer Name</label>
          <input
            name="name"
            type="name"
            className="input w-full mb-2"
            readOnly
            defaultValue={user?.displayName}
          />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full mb-2"
            readOnly
            defaultValue={user?.email}
          />
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <img
              src={user?.photoURL}
              alt="buyer"
              className="w-14 h-14 rounded-full bg-gray-200 border border-gray-400"
            />
            <div className="grow">
              <label className="img">Image url</label>
              <input
                name="imgUrl"
                type="text"
                className="input w-full mb-2"
                readOnly
                defaultValue={user?.photoURL}
              />
            </div>
          </div>
          <label className="price flex justify-between"><p>Price (${price_min} - {price_max})</p> <p>current highest bid- ${highestBid || 'be the first'}</p></label>
          <input
            name="price"
            type="number"
            className="input w-full mb-2"
            placeholder="$$$"
            required
          />
          <label className="contact">Contact Number</label>
          <input
            name="contact"
            type="number"
            className="input w-full mb-2"
            defaultValue={user?.contact || +880}
            required
          />

          <div className="modal-action">
            <button
              type="button"
              onClick={() => modalRef.current.close()}
              className="reject-btn rounded-lg px-3 py-1"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="primary-btn rounded-lg px-3 py-1 outline outline-purple-500"
            >
              Place Bid
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
export default NewBid;

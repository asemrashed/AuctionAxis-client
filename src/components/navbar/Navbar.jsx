import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate()
  const {user, setLoading, userSignOut} = use(AuthContext)
  const handleLogOut = ()=>{
    userSignOut()
        .then(()=> {
          console.log('Successfully Signed Out')
          setLoading(false)
          navigate('/auth/login')
        })
        .catch(err => console.log(err))
  }

  const navItems = (
    <>
      <li key="1" className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li key="2" className="font-semibold">
        <NavLink to="/products">All Product</NavLink>
      </li>
      <li key="3" className="font-semibold">
        <NavLink to="/myProducts">My Product</NavLink>
      </li>
      <li key="4" className="font-semibold">
        <NavLink to="/myBids">My Bids</NavLink>
      </li>
      <li key="5" className="font-semibold">
        <NavLink to="/createProduct">Create Product</NavLink>
      </li>
    </>
  );
  const auth = (
    <>
      <Link to="/auth/login" key="1" className="btn btn-sm md:btn-md secondary-btn">
        Login
      </Link>
      <Link to="/auth/register" key="2" className="btn btn-sm md:btn-md primary-btn">
        Register
      </Link>
    </>
  );

  return (
    <div className=" shadow-md">
    <div className="max-w-[1440px] mx-auto navbar flex items-center">
      <div className="navbar-start">
        <div className="dropdown z-3 rounded-b-none">
          <div tabIndex={0} role="button" className="btn p-1 btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            id="nav"
            className="menu menu-xl dropdown-content bg-white rounded-box text-gray-700 rounded-t-none z-20 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to={'/'} className="-mt-1 text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-purple-700 to-purple-400 bg-clip-text text-transparent">AuctionAxis</Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul id="nav" className="menu menu-horizontal px-1 flex gap-4">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <div className="dropdown dropdown-end z-3">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt={user?.displayName}
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu z-3 menu-sm dropdown-content bg-white rounded-b-md mt-3 w-45 p-2 shadow">
        <li><Link to={'my-profile'} className="text-center text-primary text-base md:text-xl mb-2">{user?.displayName}</Link></li>
        <li>
          <button onClick={handleLogOut} className="btn btn-sm md:btn-md text-base font-semibold btn-warning px-6">
            Log out
          </button>
        </li>
      </ul>
    </div>
        ) : (auth)}
      </div>
    </div>
    </div>
  );
};

export default Navbar;

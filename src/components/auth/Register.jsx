import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const {user, loading, setLoading, userSignUp, userSignInWithGoogle} = use(AuthContext)
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSignUp({email, password})
      .then(result => {
        console.log(result.user);
        const newUser = result.user;
        newUser.displayName = name;
        newUser.photoURL = imgUrl
        console.log(newUser)
        setSuccess(true)
        setError(false)
        navigate('/')
      })
      .catch(err =>{
        console.log(err)
        setError(err.message)
        setLoading(false)
      })
  }
  
  const handleGoogleSignIn = (e)=>{
    e.preventDefault();
    userSignInWithGoogle()
    .then(result=>{
        console.log(result.user)
        const newUser = result.user 
        fetch('http://localhost:5000/users',{
          method: "POST",
          headers:{
            "content-type": "application/json"
          },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log('after saving the user', data)
        })
        .catch(err => console.log(err))
        setError(false)
        setSuccess(true)
        navigate( location?.state || '/')
    })
    .catch(err => {
        console.log(err)
        setError(err.message)
        setLoading(false)
    })
  }

  const togglePassVisibility = () => {
    setShowPass(!showPass);
  };

  if(loading){
    return <div className="text-2xl text-center">Loading <span className="loading loading-spinner loading-xl"></span></div>
  }

  return (
    <div className="card w-full bg-base-100 max-w-sm mx-auto shrink-0 shadow-md shadow-primary">
      {success && (
        <h5 className="text-green-500 bg-green-200 text-center py-2">
          Signup successfull
        </h5>
      )}
      {error && (
        <h5 className="text-red-500 bg-red-200 text-center py-2">{error}</h5>
      )}
      <h2 className="text-primary font-semibold text-xl md:text-2xl pt-5 text-center">
        Register your account
      </h2>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label font-semibold text-neutral-content">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Salah Uddin"
          />
          <label className="label font-semibold text-neutral-content">
            Imgae Url
          </label>
          <input
            name="imgUrl"
            type="text"
            className="input"
            placeholder="Imgae Url"
          />
          <label className="label font-semibold text-primary">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label font-semibold text-primary">Password</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
            />
            <div
              onClick={togglePassVisibility}
              className="absolute right-5 top-1 cursor-pointer p-2 z-1"
            >
              {showPass ? <RiEyeFill /> : <RiEyeCloseFill />}
            </div>
          </div>
          <div>
            <p className="link link-hover">Forgot password?</p>
          </div>
          <button
            type="submit"
            className="btn primary-btn hover:btn-secondary mt-4"
          >
          {loading ? `Registering ${<span className="loading loading-spinner loading-xl"></span>}`:'Login'}
          </button>
        </form>
         <button onClick={handleGoogleSignIn} className="btn hover:bg-blue-500 hover:text-white">
          <FaGoogle/> 
          {loading ? `Registering ${<span className="loading loading-spinner loading-xl"></span>}`:'Login with Google'}
         </button>        
        <p className="text-center text-gray-500">
          Already have an account..!{" "}
          <Link to={"/auth/login"} className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

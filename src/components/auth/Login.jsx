import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const { userSignInWithGoogle, loading, setLoading, userSignIn} = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false)
  const secureAxios = useAxiosSecure()

  const handleSignIn=(e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    userSignIn({email, password})
    .then(result => {
        console.log(result.user)
        setSuccess(true)
        navigate( location?.state || '/')
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
        // console.log(result.user)
        const newUser = result.user 
        const {displayName, email, photoURL} = newUser
        secureAxios.post('/users',{displayName, email, photoURL})
        .then(res => {
          // console.log('after saving the user', res.data)
        })
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
    <div className="card w-full max-w-sm mx-auto shrink-0 shadow-md shadow-primary">
      {success && (
        <h2 className="text-center py-2 font-semibold text-green-600 bg-green-300">
          SuccessFully Logged in
        </h2>
      )}
      {error && (
        <h2 className="text-center font-semibold py-2 text-red-600 bg-red-300">{error}</h2>
      )}
      <h2 className="text-xl md:text-2xl text-primary font-semibold pt-5 text-center">
        Login to your account
      </h2>
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
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
            {loading? <span className="loading loading-spinner loading-xl"></span>: 'Login'}
          </button>
        </form>
         <button onClick={handleGoogleSignIn} className="btn hover:bg-blue-500 hover:text-white">
            <FaGoogle/> 
            { loading? <span className="loading loading-spinner loading-xl"></span>:'Log in with Google'}
         </button>        
        <p className="text-center text-gray-500">
          Not register yet..!{" "}
          <Link to={"/auth/register"} className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

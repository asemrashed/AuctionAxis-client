import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

//   const handleEdit = (e)=>{
//     e.preventDefault();
//     const name = e.target.name.value;
//     const imgUrl = e.target.img_url.value;
//     const userInfo={
//         displayName: name,
//         photoURL: imgUrl,
//     }
//     updateProfile(auth.currentUser, userInfo)
//     .then(()=> {
//         setSuccess(true)
//         setError(null)
//         console.log('User info Updated')
//     })
//     .catch(err => {
//         setError('Profile not able to update')
//         setSuccess(false)
//         console.log(err)
//     })
//   }

  return (
    <div className="max-w-[1400px] mx-auto bg-base-200">
    <div className="max-w-[1200px] mx-auto min-h-[70vh] flex flex-col-reverse md:flex-row justify-around items-center">
        {/* update profile */}
      {/* <div className={`card ${edit? 'block':'hidden'} bg-white w-full my-5 max-w-sm shrink-0 shadow-2xl`}>
        {success && (
          <h5 className="text-green-500 bg-green-200 text-center py-2">
            Update successfull
          </h5>
        )}
        {error && (
          <h5 className="text-red-500 bg-red-200 text-center py-2">{error}</h5>
        )}
        <div className="card-body flex flex-col justify-center gap-5">
        <h2 className="text-xl md:text-2xl text-center">
          Update your account
        </h2>
          <form onSubmit={handleEdit} className="fieldset">
            <label className="label font-semibold text-neutral-content">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full"
              value={user.displayName}
            />
            <label className="label font-semibold text-neutral-content">
              Imgae Url
            </label>
            <input
              name="img_url"
              type="text"
              className="input w-full"
              placeholder="Imgae Url"
            />
            <button
              type="submit"
              className={` btn btn-primary hover:btn-secondary mt-4`}
            >
              Update Profile
            </button>
          </form>
        </div>
      </div> */}
      <div className="w-[90%] lg:w-[70%] p-5 md:p-7 flex flex-col items-center gap-10 md:flex-row-reverse bg-white max-h-fit rounded-md my-5">
        <img src={user?.photoURL} alt={user?.displayName} className="flex-1 max-w-sm shadow-2xl rounded-full w-60 object-cover" />
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-10">
          <h1 className="text-2xl md:text-5xl font-bold">{user?.displayName}</h1>
          <h1 className="text-xl md:text-2xl font-bold">{user?.email}</h1>
          {/* <div>
            <button
              onClick={()=> setEdit(!edit)}
              type="submit"
              className={` btn btn-sm md:btn-md ${!edit?'btn-primary':'btn-secondary'} hover:btn-secondary mt-4`}
            >
              {edit? 'Cancel Edit':'Update Profile'}
            </button>
          </div> */}
          <div className="flex flex-col gap-4 md:gap-6">
            <Link to={'/myProducts'} className="primary-btn px-3 py-1 rounded-md">My Prodcuts</Link>
            <Link to={'/myBids'} className="secondary-btn px-3 py-1 rounded-md">My Bids</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
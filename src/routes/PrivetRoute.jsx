import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user, loading} = use(AuthContext)
    const location = useLocation()
    
    if (loading) {
        return (
        <div className="text-2xl text-primary font-semibold flex items-center justify-center gap-5 w-full h-[50vh] bg-white">Loading<span className="loading loading-primary loading-spinner loading-xl"></span></div>
        );
    }

    if(user){
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname}  to={'/auth/login'} replace/>
        </div>
    );
};

export default PrivetRoute;
import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
        const {user} = use(AuthContext)
        const location = useLocation()
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
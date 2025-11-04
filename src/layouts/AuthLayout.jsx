import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-[1600px] min-h-screen mx-auto flex items-center justify-center'>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;
import React from 'react';
import errorMsg from '../assets/error.png'

const Error = () => {
    return (
        <div className='max-x-[1440px] min-h-screen gap-5 mx-auto flex flex-col items-center justify-center'>
            <h1 className='text-3xl md:text-6xl text-center text-secondary! font-extrabold'>Page Not Found</h1>
            <img src={errorMsg}
                alt="404" 
                className='w-3/5'
            />
        </div>
    );
};

export default Error;
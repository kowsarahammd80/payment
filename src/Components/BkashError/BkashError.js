import React from 'react';

const BkashError = () => {
    const goBackHandler = ()=>{
        window.location.href= "https://beamish-dodol-d1568a.netlify.app"
    }
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className='p-5 shadow-xl rounded-xl bg-base-100'>
            <p className='text-rose-600 font-semibold text-lg'> Bkash Server have Some Issue Plese Try Letter </p>

            <div className='text-center py-4'>
             <button onClick={goBackHandler} className='bg-rose-500 px-5 py-1 rounded-md shadow-lg text-white'>Go Back Home</button>
        </div>
        </div>
    </div> 
    );
};

export default BkashError;
import React from 'react';

const Success = () => {
    
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')

    const goBackHandler = ()=>{
        window.location.href= "https://beamish-dodol-d1568a.netlify.app"
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='p-5 shadow-xl rounded-xl bg-base-100'>
                <p className='text-green-600 text-lg'>Payment {message}</p>

               <div className='text-center py-4'>
                 <button onClick={goBackHandler} className='bg-rose-500 px-5 py-1 rounded-md shadow-lg text-white'>Go Back Home</button>
               </div>
            </div>
        </div>
    );
};

export default Success;
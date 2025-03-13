import React from "react";
import useGetSuccessApi from "../../Hooks/useGetSuccessApi";

const Success = () => {
  const searchData = new URLSearchParams(window.location.search);
  const message = searchData.get("message");
  const [getPaymentSuccessData] = useGetSuccessApi();
  const lastSuccessData = [...getPaymentSuccessData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 1);


  const goBackHandler = () => {
    window.location.href = "https://reviewqr.xyz";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className='p-5 shadow-xl rounded-xl bg-base-100'>
                <p className='text-green-600 text-lg'>Payment {message}</p>

               <div className='text-center py-4'>
                 <button onClick={goBackHandler} className='bg-rose-500 px-5 py-1 rounded-md shadow-lg text-white'>Go Back Home</button>
               </div>
            </div> */}
      <div className="w-6/7 lg:w-2/6 xl:w-2/6 md:w-4/6">
        <div className="card bg-base-100 w-full shadow-xl">
          <div className="card-body">
            <div className="card-actions justify-center">
              <span className="bg-green-400 px-4 py-3 rounded-full text-white font-semibold text-xl">
                <i class="fa-solid fa-check "></i>
              </span>
            </div>
            <section>
                {
                    lastSuccessData.map((success, index) => ( <div>
                        <div className="border-b" key={index}>
                          <p className="text-center text-xl font-light mb-2">
                            Payment Success!
                          </p>
                          <p className="text-center text-xl font-semibold mb-4">
                            {success.amount} BDT
                          </p>
                        </div>
                        <div className="pt-5 pb-4 flex items-center">
                          <div className="infoDiv border-r-2 border-dotted w-full">
                            <p className="mb-1">Inv NO</p>
                            <p className="mb-1">Name </p>
                            <p className="mb-1">Email </p>
                            <p className="mb-1">Business Name</p>
                            <p className="mb-1">Contact Number</p>
                            <p className="mb-1">Package Name</p>
                            <p className="mb-1">TrxID</p>
                            <p className="mb-1">Payment By</p>
                            <p className="mb-1">Date</p>
                          </div>
                          <div className="w-full text-left daynamicInfoDiv ms-2">
                            <p className="mb-1">{success.invoiceNumber}</p>
                            <p className="mb-1">{success.name}</p>
                            <p className="mb-1">{success.email}</p>
                            <p className="mb-1">{success.businessName}</p>
                            <p className="mb-1">{success.number}</p>
                            <p className="mb-1">{success.packageName}</p>
                            <p className="mb-1">{success.trxID}</p>
                            <p className="mb-1">{success.paymentNumber}</p>
                            <p className="mb-1">{success.date}</p>
                          </div>
                        </div>
                      </div>))
                }
            </section>
            {/* <div className="text-center py-2 bg-rose-500 rounded mx-2 text-white">
              <button onClick={goBackHandler}>Go Back Home</button>
            </div> */}
            <div className="text-center pt-3">
              For on borading process <a className="text-blue-600 underline" href="https://wa.me/message/BFPGFZIIFKYAO1" target="_blank" rel="noopener noreferrer">click here</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Success;

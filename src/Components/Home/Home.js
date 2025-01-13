import React, { useEffect, useState } from "react";

const Home = () => {
  const [paymentInfo, setPaymentInfo] = useState({});

  console.log(paymentInfo);

  useEffect(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Parse query parameters
    const params = new URLSearchParams(currentUrl.split("?")[1]);

    // Extract data
    const name = params.get("name");
    const email = params.get("email");
    const businessName = params.get("businessName");
    const contactNumber = params.get("contactNumber");
    const packageName = params.get("packageName");
    const amount = params.get("amount");
    const currency = params.get("currency");

    // Store the extracted data in state
    setPaymentInfo({
      name,
      email,
      businessName,
      contactNumber,
      packageName,
      amount,
      currency,
    });
  }, []);
  
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="py-5">
              <h1 className="text-xl font-semibold pb-4">Payment Details</h1>
              <p>
                <strong>Name:</strong> {paymentInfo.name}
              </p>
              <p>
                <strong>Email:</strong> {paymentInfo.email}
              </p>
              <p>
                <strong>Business Name:</strong> {paymentInfo.businessName}
              </p>
              <p>
                <strong>Contact Number:</strong> {paymentInfo.contactNumber}
              </p>
              <p>
                <strong>Package Name:</strong> {paymentInfo.packageName}
              </p>
              <p>
                <strong>Amount:</strong> {paymentInfo.amount}{" "}
                <span>{paymentInfo.currency}</span>
              </p>
              {/* <p>
              <strong>Currency:</strong> {paymentInfo.currency}
            </p> */}
            </div>
            <div className="card-actions justify-center">
              <button className="px-5 py-1 bg-slate-500 text-white shadow-xl rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center h-screen mx-auto w-full">
        <div className="p-5 shadow-xl">
          <h1>Payment Details</h1>
          <p>
            <strong>Name:</strong> {paymentInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {paymentInfo.email}
          </p>
          <p>
            <strong>Business Name:</strong> {paymentInfo.businessName}
          </p>
          <p>
            <strong>Contact Number:</strong> {paymentInfo.contactNumber}
          </p>
          <p>
            <strong>Package Name:</strong> {paymentInfo.packageName}
          </p>
          <p>
            <strong>Amount:</strong> {paymentInfo.amount}
          </p>
          <p>
            <strong>Currency:</strong> {paymentInfo.currency}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;

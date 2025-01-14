import React, { useEffect, useState } from "react";
import "./Home.css";

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
    <div className="flex justify-center items-center h-screen bg-base-200 ">
      <div className="w-full lg:w-1/2 mx-5 lg:mx-0 xl:mx-0 md:mx-20">
        <div className="card bg-base-100 shadow-xl mx-5 lg:mx-36 xl:mx-36 md:mx-8">
          <div className="card-body">
            <div className="">
              <div className="py-5">
                <h1 className="text-lg lg:text-xl xl:text-xl md:text-xl font-semibold pb-4">
                  Payment Details
                </h1>
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
            </div>
            <div className="card-actions justify-center">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="px-5 py-1 bg-slate-500 text-white shadow-xl rounded-lg w-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* modal */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">
                ✕
              </button>
            </form>
            {/* payment method logo */}
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-start lg:items-center xl:items-center w-full">
              {/* bkash */}
              <div className="flex items-center py-4">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio me-3"
                  value="bkash"
                />
                <div className="paymentLogoDivBkash">
                  <img
                    className="logoImgBkash"
                    src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo-700x287.png"
                    alt=""
                  />
                </div>
              </div>
              {/* ssl */}
              <div className="flex items-center py-4">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio me-3"
                  value="ssl"
                />
                <div className="paymentLogoDivSll">
                  <img
                    className="logoImgSSL"
                    src="https://sslcommerz.com/wp-content/uploads/2021/11/logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <button className="font-bold text-lg w-full text-center py-2 bg-rose-500 text-white rounded-xl">
                Go For Paymnet
              </button>
            </div>
            {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
          </div>
        </dialog>
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

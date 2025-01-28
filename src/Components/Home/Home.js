import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import logo from "../../Images/Social_Media-2-removebg-preview.png";

const Home = () => {
  const [paymentInfo, setPaymentInfo] = useState({});
  const [step, setStep] = useState(1); // Manage current step
  const [selectedPayment, setSelectedPayment] = useState("");
  const [loading, setLoading]= useState(false)

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2); // Go to Step 2
    } else {
      setStep(1); // Go back to Step 1
    }
  };

  const handleGoBack = () => setStep(1);
  

  useEffect(() => {
    // Get the current URL
    // setLoading(true)
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
    // setLoading(false)
  }, []);

  // payment handler
  const pay = async () => {
    try {
      setLoading(true)
      const { data } = await axios.post(
        "http://localhost:5000/api/test/payment/creates",
        {
          amount: parseInt(paymentInfo.amount),
          orderId: Math.random() * 3 + 1,
          name: paymentInfo.name,
          email: paymentInfo.email,
          number: paymentInfo.contactNumber,
          packageName: paymentInfo.packageName,
          businessName: paymentInfo.businessName,
          currency: paymentInfo.currency,
          refund: "",
          paymentType: "bkash",
        },
        { withCredentials: true }
      );
      console.log(data)

      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
      finally {
        setLoading(false);
    }
  };

  const orderIds = (Math.random() * 1000 + 1).toFixed(0).toString(); 

  const payStation = async () => {
    try {
        setLoading(true);

        // Payload to be sent to the backend
        const payload = {
            amount: 3000,
            orderId: orderIds,
            name: 'Niloy 2',
            email: 'emailes@gmail.com',
            number: '01913885568',
            packageName: 'best',
            businessName: 'Tech',
            currency: 'BDT',
            paymentType: 'payStation',
        };

        console.log('Sending Payload:', payload); // Debugging log

        // Axios call to the backend
        const { data } = await axios.post(
            'http://localhost:5000/api/payStation/create',
            payload,
            { withCredentials: true } // Ensures cookies are included if required
        );

        // Debugging log for backend response
        console.log('Backend Response:', data);

        // Redirect to payment URL if successful
        if (data.payment_url) {
            window.location.href = data.payment_url;
        } else {
            throw new Error('Payment URL not found in response.');
        }
    } catch (error) {
        // Log error for debugging
        console.error('Payment Error:', error.response?.data || error.message);
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="cardMainDiv mx-5">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="">
              <div className="py-5">
                <div className="border-b">
                  <h1 className="text-lg lg:text-xl xl:text-xl md:text-xl font-light pb-2 lg:pb-4 xl:pb-4 mb:pb-3 text-center">
                    Payment Info
                  </h1>
                  <p className="text-center pb-2 text-lg lg:text-xl xl:text-xl md:text-xl font-light">
                    Amount :{" "}
                    <span className="text-lg lg:text-xl xl:text-xl md:text-xl font-semibold">
                      {paymentInfo.amount}
                    </span>
                    <span className="daynamicInfoDiv">
                      {paymentInfo.currency}
                    </span>
                  </p>
                </div>
                <div className="pt-5 flex items-center">
                  <div className="infoDiv border-r-2 border-dotted w-full">
                    <p className="mb-1">Name </p>
                    <p className="mb-1">Email </p>
                    <p className="mb-1">Business Name </p>
                    <p className="mb-1">Contact Number </p>
                    <p className="mb-1">Package Name </p>
                  </div>
                  <div className="w-full text-right daynamicInfoDiv">
                    <p className="mb-1">{paymentInfo.name}</p>
                    <p className="mb-1">{paymentInfo.email}</p>
                    <p className="mb-1">{paymentInfo.businessName}</p>
                    <p className="mb-1">{paymentInfo.contactNumber}</p>
                    <p className="mb-1">{paymentInfo.packageName}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-actions justify-center mx-5 lg:mx-20 xl:mx-20 md:mx-10">
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="px-5 py-1 cardPaymentButton shadow-xl rounded-lg w-full"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-500 text-white">
                ✕
              </button>
            </form>
          
            <div className="flex flex-col justify-center lg:flex-row lg:justify-between items-start lg:items-center xl:items-center w-full gap-3 lg:gap-5 xl:gap-5 md:gap-5">
              
              <div className="flex items-center py-2 lg:py-4 xl:py-4 md:py-4 w-full">
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
         
              <div className="flex items-center py-2 lg:py-4 xl:py-4 md:py-4 w-full">
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
            <div className="pt-5 mx-5">
              <button
                onClick={pay}
                className="w-full text-center py-1 text-white ModalPayButton rounded-xl shadow-xl"
              >
                Go For Paymnet
              </button>
            </div>
            
          </div>
        </dialog>
      </div> */}
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
      <div className="cardMainDiv mx-5 lg:mx-0 xl:mx-0 md:mx-0">
        <div className="">
        <div className="w-full flex justify-center mb-5">
              <div className="watheTaLogoDiv">
                <img className="wathetaImg" src={logo} alt="" />
              </div>
            </div>
          <div className="p-4 shadow-xl rounded-xl bg-base-100">
            
            <h2 className="text=lg lg:text-xl xl:text-xl md:text-xl font-bold text-center mb-4">
              Start Your Automation Journey
            </h2>

            {/* step 1 abd 2 condition */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex-1 text-center">
                <p
                  className={`text-sm font-medium ${
                    step === 1 ? "text-amber-500" : "text-gray-400"
                  }`}
                >
                  Step 1
                </p>
                <p className="text-xs">There Is your business Info</p>
              </div>
              <div className="w-8 h-px bg-gray-300" />
              <div className="flex-1 text-center">
                <p
                  className={`text-sm font-medium ${
                    step === 2 ? "text-amber-500" : "text-gray-400"
                  }`}
                >
                  Step 2
                </p>
                <p className="text-xs">Payment Details</p>
              </div>
            </div>
            <div className="border-t border-amber-500 mt-2" />
            {/* setp 1 */}
            {step === 1 && (
              <div className="mt-6">
                {/* headline */}
                <div>
                  {/* headline */}
                  <div></div>
                  {/* info */}
                  <div className="pt-5 pb-4 flex items-center">
                    <div className="infoDiv border-r-2 border-dotted w-full">
                      <p className="mb-1">Name </p>
                      <p className="mb-1">Email </p>
                      <p className="mb-1">Business Name </p>
                      <p className="mb-1">Contact Number </p>
                      <p className="mb-1">Package Name </p>
                    </div>
                    <div className="w-full text-right daynamicInfoDiv">
                      <p className="mb-1">{paymentInfo.name}</p>
                      <p className="mb-1">{paymentInfo.email}</p>
                      <p className="mb-1">{paymentInfo.businessName}</p>
                      <p className="mb-1">{paymentInfo.contactNumber}</p>
                      <p className="mb-1">{paymentInfo.packageName}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    onClick={handleNextStep}
                    className="w-full cardPaymentButton py-1 rounded-lg"
                  >
                    Go To Step #2
                  </button>
                </div>
              </div>
            )}
            {/* step 2 */}
            {step === 2 && (
              <div className="pt-5">
                <div className="flex justify-between mb-6">
                  <button
                    onClick={() => setSelectedPayment("Bkash")}
                    className={`flex justify-center items-center border rounded-lg mr-2 w-full ${
                      selectedPayment === "Bkash"
                        ? "border-red-500 text-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <span className="bkashLogoDiv me-2 lg:me-4 xl:me-4 md:me-3"><img className="bkashLogo" src="https://logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon.png" alt="" /></span> Bkash
                  </button>
                  <button
                    onClick={() => setSelectedPayment("PayStation")}
                    className={`flex justify-center items-center p-3 border rounded-lg w-full ${
                      selectedPayment === "PayStation"
                        ? "border-indigo-900 text-indigo-900"
                        : "border-gray-300"
                    }`}
                  >
                   <span className="payLogoDiv me-2 lg:me-4 xl:me-4 md:me-3"> <img className="payLogo" src="https://www.paystation.com.bd/documentation/assets/images/logo.png" alt="" /></span> PayStation
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium mb-2">Package Amount</p>
                  <div className="text-right text-lg">
                    {/* <span className="line-through text-gray-400 mr-2">5000</span> */}
                    <span className="text-red-500">{}</span>
                    <span className="text-lg text-red-500 font-semibold">
                      {paymentInfo.amount}
                    </span>
                    <span className="daynamicInfoDiv">
                      {paymentInfo.currency}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4 mb-6">
                  By pressing “Pay Now” you agree to the{" "}
                  <span className="font-bold text-black">
                    Terms and Conditions
                  </span>
                </p>
                <div className=" pt-2">
                  <button
                    onClick={pay}
                    className={`w-full py-1 rounded-lg mb-4 ${
                      selectedPayment
                        ? "bg-red-500 text-white" // Active state
                        : "bg-gray-300 text-gray-500 cursor-not-allowed" // Disabled state
                    }`}
                    disabled={!selectedPayment}
                  >
                   {
                    loading ? (<span className="loading loading-dots loading-lg"></span>) : "Pay Now"
                   }  
                  </button>
                 
                  <button
                    onClick={handleGoBack}
                    className="w-full bg-gray-200 text-black py-1 rounded-lg"
                  >
                    Go Back
                  </button>

                  <button onClick={payStation} className="p-3">Pay Station</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

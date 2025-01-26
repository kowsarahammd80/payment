import React, { useState } from "react";
import logo from "../../Images/Web-format-1024x204 1.png";
// import { createPayment } from "../../utils/paymentApi";

const PaymnetTest = () => {
  const [step, setStep] = useState(1); // Manage current step
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2); // Go to Step 2
    } else {
      setStep(1); // Go back to Step 1
    }
  };

  const handleGoBack = () => setStep(1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="mx-5 lg:mx-0 xl:mx-0 md:mx-0">
        <div className="w-full max-w-md p-4 shadow rounded-xl bg-base-100">
          <div className=" flex justify-center mb-5">
            <div className="watheTaLogoDiv">
              <img className="wathetaImg" src={logo} alt="" />
            </div>
          </div>
          <h2 className="text=lg lg:text-xl xl:text-xl md:text-xl font-bold text-center mb-4">
            Start Your Automation Journey
          </h2>
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
                    <p className="mb-1">Name </p>
                    <p className="mb-1">Email </p>
                    <p className="mb-1">Business Name </p>
                    <p className="mb-1">Contact Number </p>
                    <p className="mb-1">Package Name </p>
                  </div>
                </div>
              </div>
              <div className="mx-16">
                <button
                  onClick={handleNextStep}
                  className="w-full bg-red-500 text-white py-1 rounded-lg"
                >
                  Go To Step #2
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="pt-5">
              <div className="flex justify-between mb-6">
                <button
                  onClick={() => setSelectedPayment("Bkash")}
                  className={`flex-1 p-3 border rounded-lg mr-2 ${
                    selectedPayment === "Bkash"
                      ? "border-red-500 text-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <span className="text-lg">🕊</span> Bkash
                </button>
                <button
                  onClick={() => setSelectedPayment("Nagad")}
                  className={`flex-1 p-3 border rounded-lg ${
                    selectedPayment === "Nagad"
                      ? "border-orange-500 text-orange-500"
                      : "border-gray-300"
                  }`}
                >
                  <span className="text-lg">🔥</span> Nagad
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium mb-2">Package Amount</p>
                <div className="text-right text-lg">
                  {/* <span className="line-through text-gray-400 mr-2">5000</span> */}
                  <span className="text-red-500">4990 TK</span>
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
                  className="w-full bg-red-500 text-white py-1 rounded-lg mb-4"
                  disabled={!selectedPayment}
                >
                  Pay Now
                </button>
                <button
                  onClick={handleGoBack}
                  className="w-full bg-gray-200 text-black py-1 rounded-lg"
                >
                  Go Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymnetTest;

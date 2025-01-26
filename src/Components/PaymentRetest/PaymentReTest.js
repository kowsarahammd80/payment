import axios from "axios";
import React from "react";

const PaymentReTest = () => {

  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/test/payment/creates",
        { amount: 50, orderId: 1 },
        { withCredentials: true }
      );
    //   console.log(data);
    window.location.href = data.bkashURL
    } catch (error) {
        console.log(error.response.data)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <p>ok</p>
      </div>
    </div>
  );
};

export default PaymentReTest;

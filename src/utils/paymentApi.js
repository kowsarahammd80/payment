export const createPayment = async (amount, invoiceNumber) => {
    const response = await fetch("http://localhost:5000/api/bkash/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, invoiceNumber }),
    });
    return await response.json();
  };
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Order Confirmed!
        </h1>
        <p className="text-lg mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <p className="text-sm text-gray-600 mb-8">
          You will receive a confirmation email with your order details shortly.
        </p>
        <Link
          href="/products"
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary transition duration-200"
        >
          Continue to shop
        </Link>
      </div>
    </div>
  );
};

export default Success;

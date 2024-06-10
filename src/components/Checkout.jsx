"use client";

import React, { useContext, useState } from "react";

import Link from "next/link";
import { useProducts } from "@/context/productContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const Checkout = () => {
  const { user } = useUser();
  const { cart, clearCart } = useProducts();
  const router = useRouter();
  const [fullName, setFullName] = useState(user ? user.fullName : "");
  const [email, setEmail] = useState(
    user ? user.primaryEmailAddress.emailAddress : ""
  );
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!fullName) formErrors.fullName = "Full name is required";
    if (!email) formErrors.email = "Email is required";
    if (!address) formErrors.address = "Address is required";
    if (!city) formErrors.city = "City is required";
    if (!country) formErrors.country = "Country is required";
    if (!postalCode) formErrors.postalCode = "Postal code is required";
    if (!cardNumber) formErrors.cardNumber = "Card number is required";
    if (!expirationDate)
      formErrors.expirationDate = "Expiration date is required";
    if (!cvc) formErrors.cvc = "CVC is required";
    return formErrors;
  };

  const handlePlaceOrder = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const orderDetails = {
      fullName,
      email,
      address,
      city,
      country,
      postalCode,
      cardNumber,
      expirationDate,
      cvc,
      products: cart?.cartItems,
    };

    try {
      //   console.log(orderDetails.products);
      const response = await axios.post("/api/order", orderDetails);
      clearCart();
      router.push("/success");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  console.log(user);

  return (
    <>
      <section className="py-5 sm:py-7 bg-primary text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">Checkout </h2>
        </div>
      </section>

      <div className="container mx-auto p-4 mb-10">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.postalCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.postalCode}
                  </p>
                )}
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cart?.cartItems?.map((product) => (
                <div key={product.product} className="flex items-center">
                  <Image
                    height={100}
                    width={100}
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm">Quantity: {product.quantity}</p>
                    <p className="text-sm">Price: ${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-semibold mt-8 mb-4">Payment Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cardNumber}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Expiration Date
                </label>
                <input
                  type="text"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                  placeholder="MM/YY"
                />
                {errors.expirationDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.expirationDate}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">CVC</label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border p-3"
                />
                {errors.cvc && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
                )}
              </div>
            </form>
            <button
              className="mt-6 w-full bg-primary  text-white py-3 rounded-md hover:bg-primary/60 transition duration-200"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

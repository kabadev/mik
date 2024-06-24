import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Review = () => {
  return (
    <div className="p-3 md:p-20 bg-primary">
      <div className="mb-4">
        <p className="text-white">Customer Reviews</p>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          What Our Customers Say
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className=" rounded-md p-3 space-y-4 bg-white">
          <p>
            {`MIK Palm Oil is the best! It makes my dishes taste amazing. I love
            that it's natural and sustainable.`}
          </p>
          <span>⭐⭐⭐⭐⭐</span>
          <div className="flex gap-2">
            <span>Name: Fatmata </span>
          </div>
        </div>
        <div
          className=" rounded-md p-3 space-y-4 
        bg-white"
        >
          <p>
            {`I love that it's sustainably sourced. Great quality too! I use it in
            all my baking recipes`}
          </p>
          <span>⭐⭐⭐⭐⭐</span>
          <div className="flex gap-2">
            <span>Name: Abu</span>
          </div>
        </div>
        <div className=" rounded-md p-3 space-y-4 bg-white">
          <p>
            {`MIK Palm Oil is the best! It makes my dishes taste amazing. I love
            that it's natural and sustainable.`}
          </p>
          <span>⭐⭐⭐⭐⭐</span>
          <div className="flex gap-2">
            <span>Name: Amabin</span>
          </div>
        </div>
        <div className=" rounded-md p-3 space-y-4 bg-white">
          <p>
            Perfect for my baking needs. Highly recommend! The flavor and
            quality are unmatched.
          </p>
          <span>⭐⭐⭐⭐⭐</span>
          <div className="flex gap-2">
            <span>Name: Amie</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

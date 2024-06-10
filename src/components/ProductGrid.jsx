"use client";
import { useProducts } from "@/context/productContext";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const ProductGrid = ({ products, start, end }) => {
  const { isLoading, addItemToCart } = useProducts();

  const addToCartHandler = (product) => {
    addItemToCart({
      product: product._id,
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-md:gap-y-4 md:gap-4 mt-4 ">
      {isLoading &&
        [...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-[320] md:h-[350px] border p-2 rounded-2xl bg-gray-200 animate-pulse"
          >
            <div className="h-[170px] md:h-[200px]"></div>
            <div className="py-4">
              <div className="text-sm bg-gray-300 h-5 w-3/4 mb-2 animate-pulse"></div>
              <div className="flex gap-1">
                <div className="rounded-2xl h-[10px] w-[10px] bg-gray-300 animate-pulse"></div>
                <div className="rounded-2xl h-[10px] w-[10px] bg-gray-300 animate-pulse"></div>
                <div className="rounded-2xl h-[10px] w-[10px] bg-gray-300 animate-pulse"></div>
                <div className="rounded-2xl h-[10px] w-[10px] bg-gray-300 animate-pulse"></div>
              </div>
              <div className="flex gap-1 items-center justify-between mt-2">
                <div className="flex gap-1 items-center">
                  <div className="bg-gray-300 h-5 w-8"></div>
                  <div className="font-bold text-xl text-slate-900 bg-gray-300 h-5 w-12"></div>
                </div>
                <div className="flex items-center divide-x rounded-lg border  bg-gray-300 text-white text-center text-md font-medium text-secondary-700 shadow-sm hover:bg-primary/60">
                  <div className="flex items-center space-x-2 py-2.5 px-3">
                    <div className="w-5 h-5 bg-gray-300"></div>
                    <div className="bg-gray-300 h-5 w-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {products?.slice(start, end)?.map((product, i) => (
        <div
          key={i}
          className="h-[320] md:h-[350px] border p-2 rounded-2xl bg-white"
        >
          <div className="h-[170px] md:h-[200px]">
            <Link href={`/products/${product._id}`}>
              <Image
                src={product.images[0]}
                className="rounded-2xl h-full object-cover"
                alt="Banner"
                height={1000}
                width={1000}
              />
            </Link>
          </div>
          <div className="py-4">
            <Link href={`/products/${product._id}`} className="text-sm">
              {product?.title}
            </Link>
            <div className="text-yellow-600 flex gap-1">
              <Image
                src="/starfill.png"
                className="rounded-2xl h-[10px] w-[10px] object-cover"
                alt="Banner"
                height={150}
                width={150}
              />
              <Image
                src="/starfill.png"
                className="rounded-2xl h-[10px] w-[10px] object-cover"
                alt="Banner"
                height={150}
                width={150}
              />
              <Image
                src="/starfill.png"
                className="rounded-2xl h-[10px] w-[10px] object-cover"
                alt="Banner"
                height={150}
                width={150}
              />
              <Image
                src="/start.png"
                className="rounded-2xl h-[10px] w-[10px] object-cover"
                alt="Banner"
                height={150}
                width={150}
              />
              {/* <Star size={15} />
              <Star size={15} />
              <Star size={15} /> */}
            </div>

            <div className="flex gap-1 items-center justify-between">
              <span className="flex gap-1 items-center">
                NLE
                <span className="font-bold text-xl text-slate-900">
                  {product.price}
                </span>
              </span>
              <button
                onClick={() => addToCartHandler(product)}
                type="button"
                className="md:flex hidden items-center divide-x rounded-lg border border-primary bg-primary text-white text-center text-md font-medium text-secondary-700 shadow-sm hover:bg-primary/60"
              >
                <div className="flex items-center space-x-2 py-2.5 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span>Add</span>
                </div>
                {/* <div className="py-2.5 px-3">18</div> */}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;

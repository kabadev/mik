"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Utility function to format price with a comma for thousands
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const pageSize = 10; // Number of products per page

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data.data);
      setLoading(false);
    });
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / pageSize);

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(currentPage * pageSize, products.length);

  const productsToDisplay = products?.slice(startIndex, endIndex);

  const changePage = (page) => {
    setCurrentPage(page);
    setLoading(false);
  };

  return (
    <div className="bg-white m-6 mt-10 p-6 pb-10">
      <header>
        <div className="mx-auto px-4 py-3 sm:px-6 sm:py-12 lg:px-8 max-md:flex-col ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-3xl">
                All Products
              </h1>
              <p className="mt-1.5 text-md text-gray-500">
                Let&apos;s create a new product! 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center max-w-md">
              <Link
                href={"/admin/products/new"}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border  px-5 py-3  transition hover:bg-slate-200  focus:outline-none focus:ring"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium"> Add Product </span>
              </Link>
            </div>
          </div>
          <hr className="my-8 h-px border-0 bg-gray-300" />
        </div>
      </header>

      <div className="overflow-x-auto mx-auto px-4">
        {products.length === 0 ? (
          <p className="w-full text-center">No products available.</p>
        ) : (
          <>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-md border rounded">
              <thead>{/* Table headers here */}</thead>
              {productsToDisplay.map((product, index) => (
                <tbody className="divide-y divide-gray-200" key={product._id}>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 flex items-center  gap-1">
                      <div className="h-10 w-10">
                        <Image
                          height={100}
                          width={100}
                          className="h-full w-full rounded-full object-cover object-center bg-gray-200"
                          src={product.images?.[0] || "/product.png"}
                          alt={product.title}
                        />
                      </div>
                      {product.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 truncate max-w-md">
                      {product.description}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      NLE. {formatPrice(product.price)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 gap-4 flex">
                      <Link
                        href={"/admin/products/" + product._id}
                        className="inline-block rounded bg-[#ff353b] px-4 py-2 text-xs font-medium text-white hover:bg-[#ff353b]/80"
                      >
                        Edit
                      </Link>
                      <Link
                        href={"/admin/products/delete/" + product._id}
                        className="inline-block rounded border px-4 py-2 text-xs font-medium  hover:bg-gray-300"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => changePage(i + 1)}
                    className={`mx-2 px-3 py-2 rounded ${
                      i + 1 === currentPage
                        ? "bg-blue-300 text-slate-900"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

"use client";
import ProductGrid from "@/components/ProductGrid";
import { useProducts } from "@/context/productContext";
import React, { useState } from "react";

const Product = () => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="h-[100px] md:h-[200px] bg-primary flex items-center justify-center">
        <h1 className="text-lg md:text-3xl font-bold text-white ">Shop</h1>
      </div>

      <div className="p-3 md:p-8">
        <div className="md:w-[30%] w-[100%] my-10 ">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <ProductGrid products={filteredProducts} start={0} end={100} />
        </div>
      </div>
    </div>
  );
};

export default Product;

import Link from "next/link";
import React from "react";
import ProductGrid from "./ProductGrid";
import { useProducts } from "@/context/productContext";

const FeatureProducts = () => {
  const { products } = useProducts();
  return (
    <div className="p-2 md:px-24 py-10 bg-white">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl md:text-2xl  font-bold tracking-tight text-text">
          Latest Products
        </h2>
        <Link href={"#"}>View all </Link>
      </div>
      <ProductGrid products={products} start={0} end={4} />
    </div>
  );
};

export default FeatureProducts;

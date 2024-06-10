import Link from "next/link";
import React, { useEffect } from "react";
import ProductGrid from "./ProductGrid";
import { useProducts } from "@/context/productContext";

const Recommended = () => {
  const { products } = useProducts();
  // useEffect(() => {
  //   shuffleProducts();
  // }, [products]);

  return (
    <div className="p-2 md:px-24 py-10">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl md:text-2xl  font-bold tracking-tight text-text">
          Recommended Products
        </h2>
        <Link href={"#"}>View all </Link>
      </div>
      <ProductGrid products={products} start={2} end={5} />
    </div>
  );
};

export default Recommended;

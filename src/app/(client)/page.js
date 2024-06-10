"use client";
import About from "@/components/About";
import FeatureProducts from "@/components/FeatureProducts";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Recommended from "@/components/Recommended";
import Review from "@/components/Review";
import { useProducts } from "@/context/productContext";
import { useEffect } from "react";

export default function Home() {
  const {
    products,
    cart,
    fetchAllProducts,
    addProductToCart,
    deleteFromCart,
    updateProductQuantity,
    getTotalPrice,
  } = useProducts();

  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureProducts />
      <About />
      <Features />
      <Review />
      <Recommended />
    </main>
  );
}

"use client";
import { useProducts } from "@/context/productContext";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Pid({ params }) {
  // const { addProduct } = useContext(CartContext);
  // if (product) {
  const { addItemToCart } = useProducts();
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!params.productId) {
      return;
    }
    axios.get("/api/products/" + params.productId).then((response) => {
      setProductInfo(response.data.data);
    });
  }, [params.productId]);

  const addToCartHandler = (product) => {
    addItemToCart({
      product: product._id,
      name: product.title,
      price: product.price,
      image: product.images[0],
    });
    toast.success("Product added to cart");
  };

  //   const product = {
  //     name: "MIK Palm Oil - 1L",
  //     description:
  //       "Experience the excellence of premium, naturally sourced palm oil for all your culinary needs. Our 1L bottle is great for families and frequent cooking, offering great value and convenience.",
  //     price: 14.99,
  //     mainImage: "/image.png",
  //     galleryImages: ["/image.png", "/image.png", "/image.png", "/image.png"],
  //   };
  return (
    <div className="container mx-auto px-4 py-10">
      {!productInfo ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <div className="w-full h-[400px] bg-gray-700 animate-pulse rounded-lg"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              <div className="w-full h-[150px] bg-gray-700 animate-pulse rounded-lg"></div>
              <div className="w-full h-[150px] bg-gray-700 animate-pulse rounded-lg"></div>
              <div className="w-full h-[150px] bg-gray-700 animate-pulse rounded-lg"></div>
              <div className="w-full h-[150px] bg-gray-700 animate-pulse rounded-lg"></div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="w-full h-[15px] bg-gray-700 animate-pulse mb-4 rounded-lg"></div>
            <div className="w-[70px] h-[15px] bg-gray-700 animate-pulse mb-4 rounded-lg"></div>

            <div className="w-[200px] h-[50px] my-8 bg-gray-700 animate-pulse mt-4 mb-4 rounded-lg"></div>

            <div className="w-[100%] h-[10px] bg-gray-700 animate-pulse mt-4 mb-4 rounded-lg"></div>
            <div className="w-[70%] h-[10px] bg-gray-700 animate-pulse mb-4 rounded-lg"></div>
            <div className="w-[90%] h-[10px] bg-gray-700 animate-pulse mb-4 rounded-lg"></div>
            <div className="w-[50%] h-[10px] bg-gray-700 animate-pulse mb-4 rounded-lg"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <Image
              height={500}
              width={500}
              src={productInfo?.images?.[0] || "/product.png"}
              alt={productInfo?.title}
              className="w-full max-h-[800px] object-cover"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {productInfo?.images?.map((image, index) => (
                <Image
                  height={500}
                  width={500}
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[150px] object-cover"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{productInfo?.title}</h1>
            <p className="text-xl text-gray-800 mb-4">${productInfo?.price}</p>
            <button
              onClick={() => addToCartHandler(productInfo)}
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary"
            >
              Add to Cart
            </button>
            <p className="text-gray-700 mt-6">{productInfo?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

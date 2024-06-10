"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// Create context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch all products
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await axios.get("/api/products");
      setIsLoading(false);
      setProducts(response.data.data);
    };

    fetchProducts();
  }, []);

  const router = useRouter;

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addItemToCart = async ({
    product,
    name,
    price,
    image,

    quantity = 1,
  }) => {
    const item = {
      product,
      name,
      price,
      image,
      quantity,
    };

    const isItemExist = cart?.cartItems?.find(
      (i) => i.product === item.product
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product === isItemExist.product ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const clearCart = async (userId) => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        totalPrice,
        isLoading,

        clearCart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProducts = () => {
  return useContext(ProductContext);
};

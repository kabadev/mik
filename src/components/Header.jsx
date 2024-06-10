"use client";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../../lib/CartContext";
// import { useRouter } from "next/router";
// import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProducts } from "@/context/productContext";
import axios from "axios";
import { SignedIn, UserButton, useAuth } from "@clerk/nextjs";

export default function Header() {
  const { userId } = useAuth();
  const { cart } = useProducts();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const [categories, setCategories] = useState([]);
  // const { cartProducts } = useContext(CartContext);
  const router = useRouter();
  const { pathname } = router;
  // const { data: session } = useSession()

  useEffect(() => {
    // Update the currentPath state on client side
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const active = "p-2 text-primary bg-secondary rounded-lg";
  const inActive = "p-2";
  const cartItems = cart?.cartItems;
  return (
    <>
      <header className="bg-white flex items-center justify-between h-[70px] border-b">
        <div className="">
          <Link
            className="flex  items-center text-text font-medium text-lg "
            href="/"
          >
            <Image
              src="/loho.jpg"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-[30%] h-[30%] md:w-[60px] md:h-[60px] rounded-full"
            />
            <span className="font-bold">
              <span className=" text-primary">MIK</span>|PALM OIL
            </span>
          </Link>
        </div>

        <div className="f">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-md">
              <li>
                <Link
                  className={`text-accent transition hover:text-accent/75 ${
                    pathname === "/" ? "text-primary" : ""
                  } `}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={`text-accent transition hover:text-accent/75 ${
                    pathname === "/products" ? "text-primary" : ""
                  } `}
                  href="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className={`text-accent transition hover:text-accent/75 ${
                    pathname === "/products" ? "text-primary" : ""
                  } `}
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`text-accent transition hover:text-accent/75 ${
                    pathname === "/products" ? "text-primary" : ""
                  } `}
                  href="/contacts"
                >
                  contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2 pr-2">
          <div className="sm:flex sm:gap-2 border-r border-primary pr-4">
            {userId ? (
              <UserButton />
            ) : (
              <>
                <Link
                  className=" text-md font-medium text-text hidden md:flex"
                  href="/sign-in"
                >
                  Login
                </Link>
                <Link
                  className=" text-md font-medium text-text hidden max-md:flex md:hidden"
                  href="/sign-in"
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Link>
              </>
            )}
          </div>

          <div className="ml-4 flow-root lg:ml-4">
            <Link href="/cart" className="group -m-2 flex items-center p-2">
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
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span className="ml-2 text-md text-primary font-bold group-hover:text-text">
                {cartItems?.length < 1 ? "0" : cartItems?.length}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>

          {/* Mobile navigation button */}
          <div className="block mr-0 md:hidden">
            <button
              onClick={toggleMobileNav}
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              {isMobileNavOpen ? (
                // X icon for close
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon for open
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {isMobileNavOpen && (
            <div className="md:hidden absolute top-24 right-0 bg-white border border-zinc-200 rounded shadow-lg p-6 text-lg ">
              <nav aria-label="Global">
                <ul className="flex flex-col items-start gap-6 text-md">
                  <li>
                    <Link
                      className={`text-accent transition hover:text-accent/75 ${
                        pathname === "/" ? active : inActive
                      } `}
                      href="/"
                      onClick={toggleMobileNav}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`text-accent transition hover:text-accent/75 ${
                        pathname === "/products" ? active : inActive
                      }`}
                      href="/products"
                      onClick={toggleMobileNav}
                    >
                      Products
                    </Link>
                  </li>

                  <li>
                    {/* {session && (
                      <button onClick={() => signOut()}>logout</button>
                    )} */}
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* <header className="md:hidden w-full flex justify-around items-center my-3 border-b fixed top-12 bg-gray-200 z-50">
        <div className="inline-flex gap-8 p-1">
          <Link
            href={"/"}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-md text-accent hover:text-gray-700 focus:relative ${
              pathname === "/" ? "text-primary" : ""
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </Link>

          <Link
            href={"/products"}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-md text-accent hover:text-gray-700 focus:relative ${
              pathname === "/products" ? "text-primary" : ""
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
            Products
          </Link>

          <Link
            href={"/cart"}
            className={`inline-flex items-center gap-2 rounded-md  px-4 py-2 text-md   ${
              pathname === "/cart" ? "text-primary" : ""
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Cart
          </Link>
        </div>
      </header> */}
    </>
  );
}

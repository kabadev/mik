import Link from "next/link";
import { useContext } from "react";
// import { CartContext } from "../../lib/CartContext";
import Image from "next/image";

export default function Hero({ product }) {
  // const { addProduct } = useContext(CartContext);
  // function addItemToCart() {
  //   addProduct(product._id);
  // }
  // if (product) {
  return (
    <div className="relative overflow-hidden bg-orange-50  h-[400px] flex max-md:block items-center  gap-4 max-md:p-4 ">
      <div className="md:w-[50%] space-y-4 md:pl-16 max-md:mt-3 ">
        <h1 className="md:text-4xl text-2xl font-black leading-[1.5] ">
          Superior Quality and Natural palm oil.
        </h1>
        <p className="w-[100%] ">
          Experience the excellence of premium, naturally sourced palm oil{" "}
          <span className="hidden md:block">
            that ensures top-tier quality while supporting eco-friendly
            practices. Perfect for all your cooking, baking, and culinary needs.
          </span>
        </p>
        <div className="mt-[120px] max-md:hidden">
          <Link
            href={"/products"}
            className="text px-10 py-3 rounded-3xl bg-primary text-white"
          >
            Buy Now
          </Link>
        </div>
      </div>
      <div className="max-md:mt-[30px]">
        <Image
          src="/banner.png"
          className="max-md:rounded-2xl"
          alt="Banner"
          height={1000}
          width={1000}
        />
      </div>
    </div>
  );
}
// return null;
// }

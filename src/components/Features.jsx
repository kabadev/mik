import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="p-4 md:px-24 py-10">
      <div className="flex max-md:flex-col gap-6 mt-5">
        <div className="md:w-[30%] space-y-4 max-md:order-2">
          <Image
            src="/isa.jpg"
            className="rounded-2xl md:w-56"
            alt="Banner"
            height={1000}
            width={1000}
          />
          <div className="-mt-32">
            <Image
              src="/palm.png"
              className="rounded-2xl md:w-56"
              alt="Banner"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className="md:w-[70%] ">
          <div className="mb-4">
            <p className="text-primary">Our Product Features</p>
            <h2 className="text-2xl font-bold tracking-tight text-text">
              Our Commitment to Quality and Sustainability
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
            <div className="border rounded-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-[40px] h-[40px] text-white bg-primary rounded-full">
                  1
                </span>
                <h2 className="text-md font-bold">100% Natural Ingredients</h2>
              </div>
              <p>
                Our palm oil is made from pure, natural ingredients without any
                artificial additives or preservatives, ensuring a healthy and
                nutritious product.
              </p>
            </div>
            <div className="border rounded-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-[40px] h-[40px] text-white bg-primary rounded-full">
                  2
                </span>
                <h2 className="text-md font-bold">
                  Eco-Friendly and Sustainable Practices
                </h2>
              </div>
              <p>
                We are committed to sustainable farming practices that protect
                the environment and promote biodiversity, ensuring that our palm
                oil is eco-friendly.
              </p>
            </div>
            <div className="border rounded-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-[40px] h-[40px] text-white bg-primary rounded-full">
                  3
                </span>
                <h2 className="text-md font-bold">Premium Quality Assurance</h2>
              </div>
              <p>
                Each batch of MIK Palm Oil undergoes rigorous quality checks to
                guarantee the highest standards of purity and excellence.
              </p>
            </div>
            <div className="border rounded-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-[40px] h-[40px] text-white bg-primary rounded-full">
                  4
                </span>
                <h2 className="text-md font-bold">
                  Perfect for Cooking and Baking
                </h2>
              </div>
              <p>
                Our palm oil is made from pure, natural ingredients without any
                artificial additives or preservatives, ensuring a healthy and
                nutritious product.
              </p>
            </div>
          </div>
          <div className="mt-[30px] ">
            <Link
              href={"#"}
              className="text px-10 py-3 rounded-3xl bg-primary text-white"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

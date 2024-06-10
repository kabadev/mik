"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Product from "../../components/Product";

export default function Pid({ params }) {
  const router = useRouter();

  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!params.pid) {
      return;
    }
    axios.get("/api/products/" + params.pid).then((response) => {
      setProductInfo(response.data.data);
      console.log(response.data.data);
    });
  }, [params.pid]);
  return (
    <>
      <div className="max-sm:p-4 bg-white rounded-2xl m-6">
        <div className="sm:flex sm:items-center sm:justify-center ">
          <div className="text-center sm:text-left">
            <p className="my-4 text-2xl font-bold ">
              Editing <span className="">{productInfo?.title}</span>
            </p>
          </div>
        </div>
        <hr className="my-8 h-px border-0 bg-gray-300" />
        <div className="my-10 max-sm:my-12">
          {productInfo && <Product {...productInfo} />}
        </div>
      </div>
    </>
  );
}

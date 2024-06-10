"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Product from "../../components/Product";
import Pid from "./Pid";

export default function page({ params }) {
  return (
    <>
      <Pid params={params} />
    </>
  );
}

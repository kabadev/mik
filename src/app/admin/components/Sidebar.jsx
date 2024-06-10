"use client";
import { menu } from "@/constant/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="fixed w-[250px] h-screen bg-white p-4">
      {/* <div className="flex items-center justify-between w-full h-[50px] border-b">
            <h3 className="text-lg">Menu</h3>
          </div> */}
      <div className="pt-6 space-y-3">
        {menu.map((item, i) => (
          <Link
            key={i}
            href={`/admin${item.path}`}
            className={`${
              pathname === item.path ? "bg-gray-100" : ""
            } flex items-center  gap-2 p-2 rounded-md hover:bg-gray-100`}
          >
            <span className="text-slate-800">{item.icon}</span>
            <h1 className="text-lg text-slate-800">{item.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

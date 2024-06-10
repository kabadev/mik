import {
  LayoutDashboard,
  LayoutList,
  Layers2,
  ShoppingCart,
  Settings,
} from "lucide-react";

export const menu = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard />,
    path: "/",
  },
  {
    name: "Products",
    icon: <LayoutList />,
    path: "/products",
  },
  {
    name: "Category",
    icon: <Layers2 />,
    path: "/categories",
  },
  {
    name: "Orders",
    icon: <ShoppingCart />,
    path: "/orders",
  },
  {
    name: "Settings",
    icon: <Settings />,
    path: "/settings",
  },
];

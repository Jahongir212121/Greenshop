import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import All from "./components/All/All";
import New from "./components/New/New";
import Salen from "./components/SaleN/SaleN";
import Shop from "./pages/Shop/Shop";
import ShopCard from "./pages/ShopCard/ShopCard";
import Checkout from "./pages/Checkout/Checkout";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <All />,
        },
        {
          path: "new",
          element: <New />,
        },
        {
          path: "sale",
          element: <Salen />,
        },
      ],
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/shop/card",
      element: <ShopCard />,
    },
    {
      path: "/shop/checkout",
      element: <Checkout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext/CartContext";
import Home from "./pages/Home/Home";
import All from "./components/All/All";
import SinglePage from "./pages/SinglePage/SinglePage";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { index: true, element: <All /> },
      ],
    },
    {
      path: '/single',
      element: <SinglePage />,
    },
    {
      path: '/cart',
      element: <Cart />
    }, {
      path: '/checkout',
      element: <Checkout />
    }
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

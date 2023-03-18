import { createBrowserRouter } from "react-router-dom";
import ProductCart from "../Component/Product/ProductCart";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/product/:id",
          element: <ProductCart/>,
        }
      ],
    },
  ]);

  export default router;
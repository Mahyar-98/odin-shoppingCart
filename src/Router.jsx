import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Thanks from "./components/Thanks";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: (
        <AppLayout>
          <ErrorPage />
        </AppLayout>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
        { path: "thanks", element: <Thanks /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

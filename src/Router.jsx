import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/:name",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

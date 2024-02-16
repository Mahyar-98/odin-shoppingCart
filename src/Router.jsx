import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />
    },
    {
      path: "/:name",
      element: <AppLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

import { createBrowserRouter } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import HomePage from "./pages/homepage/Homepage";
import Layout from "./layouts/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router";
import SnoopeduHeader from "./layouts/components/SnoopeduHeader";
import HomePage from "./pages/homepage/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
export default router;

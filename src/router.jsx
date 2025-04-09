import { createBrowserRouter } from "react-router";
import SnoopeduHeader from "./layouts/components/SnoopeduHeader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SnoopeduHeader />,
  },
]);
export default router;

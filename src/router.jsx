import { createBrowserRouter } from "react-router";
import CourseCard from "./components/CourseCard";
import HomePage from "./pages/homepage/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/courseCard",
    element: <CourseCard />,
  },
]);
export default router;

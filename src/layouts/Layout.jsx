import Footer from "./components/Footer";
import SnoopeduHeader from "./components/SnoopeduHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <SnoopeduHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

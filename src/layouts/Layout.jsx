import Footer from "./components/Footer";
import SnoopeduHeader from "./components/SnoopeduHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full flex flex-col">
      <SnoopeduHeader />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

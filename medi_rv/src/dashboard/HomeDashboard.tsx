import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const HomeDashboard = () => {
  return (
    <div className="flex flex-col text-white ">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default HomeDashboard;

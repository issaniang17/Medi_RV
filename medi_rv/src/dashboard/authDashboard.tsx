import { Link, NavLink, Outlet } from "react-router-dom";
import { authNavbar } from "../constante";
import { Heart } from "lucide-react";

const AuthDashboard = () => {
  return (
    <div className="flex flex-col gap-5 px-8 py-10">
        <div className="flex items-center gap-2 text-black font-bold mt-15 mb-5 text-2xl">
            <Heart className="shadow-lg bg-[#0B6B78] p-1 rounded-lg text-white"/>
            <p>MediRV</p>
        </div>
      <div className="flex justify-center items-center ">
        <div className="fixed z-100 top-10 rounded-2xl shadow-sm/25 p-2 flex justify-between items-center gap-3 bg-white">
          {authNavbar.map((item, index) => (
            <NavLink
              to={item.url}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0B6B78] text-white rounded-xl p-1.5 inline-flex items-center justify-center"
                  : "text-gray-500 duration-150 transition-colors ease-in hover:bg-gray-200 hover:text-black rounded-xl p-1.5 inline-flex items-center justify-center"
              }
            >
              {item.nom}
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
      <div className="flex justify-center items-center gap-3 text-gray-500 border-t border-b border-gray-200 py-4">
          <p>&copy; {new Date().getFullYear()}</p>
          <p>Dakar, Sénégal</p>
          <Link to={'/confidentialite'}>Confidentialité</Link>
      </div>
    </div>
  );
};

export default AuthDashboard;

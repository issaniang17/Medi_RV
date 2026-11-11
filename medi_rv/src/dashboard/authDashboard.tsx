import { NavLink, Outlet } from "react-router-dom";
import { authNavbar } from "../constante";

const AuthDashboard = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="fixed z-100 top-10 rounded-full shadow-sm/25 p-2 space-x-4">
          {authNavbar.map((item, index) => (
            <NavLink
              to={item.url}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#0B6B78] text-white rounded-full p-1.5 inline-flex items-center justify-center"
                  : "text-gray-500 hover:bg-gray-200 rounded-full p-1.5 inline-flex items-center justify-center"
              }
            >
              {item.nom}
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default AuthDashboard;

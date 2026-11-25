import { Heart, LogOut, Menu, X } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { doctorNav } from "../../constante";
import InitialName from "../../components/initialName";
import type { DoctorRegister } from "../../types/doctor";
import { toast } from "sonner";

const DoctorDashboard = () => {
  const [viewSidebar, setViewSidebar] = useState(false);
  if (!localStorage.getItem("Doctor")) {
    toast.error("Impossible d'acceder cette page");
    window.location.replace("/doctor-applications/");
  }
  const profil: DoctorRegister = JSON.parse(
    localStorage.getItem("Doctor") ?? "",
  );
  const handleSidebarView = () => {
    setViewSidebar(!viewSidebar);
    if (!viewSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div className="bg-[#F4F7F9]">
      <div className="fixed  top-0 left-0 w-full bg-white z-100 flex justify-between items-center py-4 px-6 text-black">
        <div
          className="flex justify-center items-center rounded-2xl p-2 bg-[#E0F2F4] text-[#0B6B78] cursor-pointer"
          onClick={handleSidebarView}
        >
          <Menu />
        </div>

        <div className="flex gap-1 space-x-3 items-center">
          <InitialName
            bgAndTextStyle="text-white bg-[#0B6B78]"
            firstName={profil.firstName}
            lastName={profil.lastName}
          />
          <div className="flex flex-col justify-center">
            <p className="font-semibold capitalize">Dr {profil.firstName} {profil.lastName}</p>
            <p className="text-sm text-gray-500">{profil.speciality}</p>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-[#F4F7F9] py-10 md:px-8">
        <Outlet />
      </div>
      <div
        className={`${viewSidebar ? "fixed z-200 top-0 left-0 w-full h-screen translate-x-0" : " -translate-x-full hidden"}  transition-all duration-300 ease-in flex`}
      >
        <div className="w-60 bg-[#0D2E35] flex flex-col items-center gap-5 divide-y divide-[#3baa9fa0] justify-between py-5 text-white leading-relaxed">
          <div className="flex w-full justify-between px-2 py-3">
            <div className="flex items-center gap-1">
              <div className="bg-[#3BAA9E] rounded-2xl p-2 items-center flex justify-center">
                <Heart />
              </div>
              <div>
                <p className="font-bold">MediRV</p>
                <p className="uppercase text-[10px] font-light">
                  espace médecin
                </p>
              </div>
            </div>
            <div
              className="text-gray-300 p-2 rounded-2xl hover:bg-[#07404d]"
              onClick={handleSidebarView}
            >
              <X />
            </div>
          </div>
          <div className="w-full  flex flex-col gap-5 h-full pt-4 px-2">
            {doctorNav.map((item, index) => (
              <NavLink
                onClick={handleSidebarView}
                to={item.url}
                key={index}
                className={({ isActive }) =>
                  `${isActive ? "bg-[#3BAA9E]" : "hover:bg-[#07404d]"} flex items-center gap-2 duration-150 ease-in transition-colors  p-2 rounded-lg`
                }
              >
                {" "}
                {<item.icon />}
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center  justify-between w-full px-4">
            <div className="flex gap-2 items-center">
              <InitialName
                bgAndTextStyle="text-white bg-[#0B6B78]"
                firstName={profil.firstName}
                lastName={profil.lastName}
              />
              <div>
                <p className="capitalize font-semibold text-sm">
                 Dr {profil.firstName} {profil.lastName}
                </p>
                <p className="font-light text-sm ">{profil.speciality} {profil.city}</p>
              </div>
            </div>
            <Link to={"/auth/login"}>
              <LogOut />
            </Link>
          </div>
        </div>
        <div
          className="backdrop-blur-xs flex-1"
          onClick={handleSidebarView}
        ></div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

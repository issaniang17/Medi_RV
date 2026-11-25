import { Calendar } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { filtreDoctorNav } from "../../constante";

const RvAction = () => {
  return (
    <div className="py-10 px-4 md:px-6">
      <div className="leading-relaxed flex flex-col space-y-5">
        <div className="flex items-center gap-1 font-bold text-[#0B6B78]">
          <Calendar />
          <span>Agenda médical</span>
        </div>
        <h1 className="font-bold text-3xl">Rendez-vous</h1>
        <p className="text-sm text-gray-500">
          Consultez les demandes et gérez le suivi de vos consultations.
        </p>
      </div>
      <div className="my-8">
        <div className="overflow-x-scroll sm:scrollbar-none my-4">
          <div className="flex gap-8  items-center  px-6 py-4 bg-gray-200 w-150 rounded-2xl sm:w-full">
            {filtreDoctorNav.map((item, index) => (
              <NavLink key={index} to={item.url} className={({isActive})=>`${isActive ? 'bg-white rounded-lg px-2 py-1 font-semibold' : 'text-gray-600 hover:text-black duration-150 ease-in transition-colors font-semibold'}`}>
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default RvAction;

import { Mars, User, Venus } from "lucide-react";
import type { registerProps } from "../../components/forms/register";

const Profil = () => {
  const profil: registerProps = JSON.parse(
    localStorage.getItem("Register") || "",
  );
  return (
    <div className="grid py-6 px-8 gap-5">
      <div className="rounded-2xl shadow-sm/40 px-4 py-6 flex gap-3 flex-col justify-center text-gray-600 md:w-1/2">
        <div className="flex justify-between">
          <div className="flex gap-2 text-gray-500">
            <div className="flex flex-col gap-2">
              <p className="capitalize text-black font-semibold">
                {profil.firstName} {profil.lastName}
              </p>
              <p className="text-[#0B6B78]">
                {profil.gender === "male" ? <Mars /> : <Venus />}
              </p>
            </div>
          </div>
          <div className="shadow-sm p-2 rounded-full size-8 flex justify-center items-center text-[#0B6B78]">
            <User />
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>
            <p>Tel mobile</p>
            <p className="text-[#0B6B78]">{profil.phone}</p>
          </div>
          <div>
            <p>Email</p>
            <p className="text-[#0B6B78]">{profil.email}</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profil;

import { Link } from "react-router-dom";
import DoctorRegisterForm from "../../components/forms/doctorRegisterForm";
import { Heart } from "lucide-react";

const DoctorRegister = () => {
  return (
    <div>
      <div className="shadow-md/30 bg-[#0B6B78] text-white flex justify-between items-center px-4 py-5 md:px-8">
        <Link to={"/"} className="flex items-center gap-3 font-bold">
          <span className="p-2 rounded-2xl bg-[#3BAA9E]">
            <Heart />
          </span>{" "}
          MediRV
        </Link>
        <Link to={"/auth/login"} className="font-bold text-gray-300">
          Se connecter
        </Link>
      </div>
      <div className="grid md:grid-cols-2  gap-5  px-5 py-8 md:px-8 md:py-10">
        <div className="hidden md:flex bg-[#0B6B78]  rounded-2xl">
          <img src="/inscriptionAvatar.svg" alt="inscriptionAvatar" />
        </div>
        <div>
          <DoctorRegisterForm />
        </div>
      </div>
    </div>
  );
};

export default DoctorRegister;

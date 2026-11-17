import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/forms/register";

const Register = () => {
  return (
    <div className="grid md:grid-cols-2  gap-5  px-5 py-8 md:px-8 md:py-10">
      <div className="hidden md:flex bg-[#0B6B78]  rounded-2xl">
        <img src="/consultation_virtuelle_medicales.png" alt="loginAvatar" />
      </div>
      <div className="flex flex-col gap-5 shadow-sm/40 rounded-2xl px-3 py-5">
        <Link
          to={"/auth/login"}
          className="flex items-center gap-1 duration-300 text-gray-500 hover:text-black "
        >
          <ArrowLeft size={15} />
          Retour à la Connexion
        </Link>
        <div className="space-y-3">
          <h2 className="font-black text-3xl">Créer un compte</h2>
          <p className="text-gray-500">
            Rejoignez MediRV gratuitement et prenez en main votre santé dès
            aujourd'hui.
          </p>
        </div>
        <RegisterForm />
        <div className="flex justify-center flex-col gap-2 md:flex-row items-center">
          <p className="text-gray-500">
            Vous avez déja un compte ?{" "}
          </p>
            <Link to={"/auth/login"} className="text-[#0B6B78] font-bold">
              Se connecter
            </Link>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row gap-2">
          <p className="text-gray-500">Vous êtes médecin ?</p>
          <Link to={'/doctor-applications/'} className="text-[#0B6B78] font-bold">S'inscrire</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

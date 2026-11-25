import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm";

const Login = () => {
  return (
    <div className="grid md:grid-cols-2  gap-5  px-5 py-8 md:px-8 md:py-10">
      <div className="hidden md:flex bg-[#0B6B78]  rounded-2xl">
        <img src="/patient_doctor_avatar.jpg" alt="loginAvatar" className="rounded-2xl"/>
      </div>

      <div className="flex flex-col gap-5 shadow-sm/40 px-3 py-5 rounded-2xl">
        <div className="space-y-3">
          <p className="font-black text-3xl">Bon retour &#x1F44B;</p>
          <p className="text-gray-500 text-lg">
            Connectez-vous à votre espace MediRV pour gérer vos rendez-vous.
          </p>
        </div>
        <LoginForm />
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <p className="text-gray-500">Pas encore de compte ?</p>
          <Link to={"/auth/register"} className="text-[#0B6B78] font-bold">
            Créer un compte
          </Link>
        </div>
        <div className="text-center text-gray-700">
          <Link to={'/'}>Annuler</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

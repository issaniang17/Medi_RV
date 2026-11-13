import { Link } from "react-router-dom";
import LoginForm from "../../components/forms/loginForm";

const Login = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <p className="font-black text-3xl">Bon retour 👋</p>
        <p className="text-gray-500 text-lg">
          Connectez-vous à votre espace MediRV pour gérer vos rendez-vous.
        </p>
      </div>
      <LoginForm />
      <div className="flex justify-center items-center gap-3">
        <p className="text-gray-500">Pas encore de compte ?</p>
        <Link to={'/auth/register'} className="text-[#0B6B78] font-bold">Créer un compte</Link>
      </div>
    </div>
  );
};

export default Login;

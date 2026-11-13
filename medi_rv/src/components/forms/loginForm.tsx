import { ArrowRight, Eye, EyeClosed, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type loginProps = {
  email: string;
  password: string;
  remember: boolean;
};
const LoginForm = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [login, setLogin] = useState<loginProps>({
    email: "",
    password: "",
    remember: false,
  });
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value === "false" || value === "true" ? Boolean(value) : value,
    }));
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!login.email || !login.password){
        return toast.error('Veillez remplir tous les champs svp')
    }
    console.log(login)
  };
  return (
    <form
      className="flex flex-col justify-between gap-4 font-semibold mt-3 mb-5"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Adresse email</label>
      <div className="flex justify-between gap-3 p-2 rounded-lg border bg-gray-200 border-gray-400">
        <Mail className="text-gray-600/80" />
        <input
          type="email"
          className="flex-1 outline-0"
          placeholder="vous@example.com"
          value={login.email.trim().toLowerCase()}
          name="email"
          onChange={handleChange}
        />
      </div>
      <label htmlFor="password">Mot de passe</label>

      <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400">
        <Lock className="text-gray-600/80" />
        <input
          type={viewPassword ? "text" : "password"}
          className="flex-1 outline-0"
          placeholder="votre mot de passe"
          name="password"
          value={login.password.trim().toLowerCase()}
          onChange={handleChange}
        />
        {viewPassword ? (
          <Eye onClick={handleViewPassword} className="text-gray-600/80" />
        ) : (
          <EyeClosed
            onClick={handleViewPassword}
            className="text-gray-600/80"
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center text-gray-500">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            value={String(login.remember)}
            onChange={handleChange}
          />
          <label htmlFor="remenber">Se souvenir de moi</label>
        </div>
        <Link to={"/auth/change-password/"} className="text-[#0B6B78]">
          Mot de passe oublié ?
        </Link>
      </div>
      <button className="inline-flex justify-center items-center p-2 rounded-2xl bg-[#0B6B78] gap-3 text-white hover:bg-[#08555f] duration-150 ease-in transition-colors cursor-pointer">
        Se connecter <ArrowRight />
      </button>
    </form>
  );
};

export default LoginForm;

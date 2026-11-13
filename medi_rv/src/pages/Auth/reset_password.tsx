import { ArrowLeft, ArrowRight, Mail, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState<string | null>(null);
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-5">
      <Link
        to={"/auth/login"}
        className="flex items-center gap-1 duration-300 text-gray-500 hover:text-black "
      >
        <ArrowLeft size={15} />
        Retour à la Connexion
      </Link>
      <div className="space-y-3">
        <h2 className="font-bold text-3xl">Mot de passe oublié ?</h2>
        <p className="text-gray-500">
          Pas de panique ! Saisissez votre adresse email et nous vous enverrons
          un lien pour réinitialiser votre mot de passe.
        </p>
      </div>
      <form
        className="flex flex-col justify-between gap-4 font-semibold"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Addresse email</label>
        <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400">
          <Mail className="text-gray-600/80" />
          <input
            name="email"
            value={email ?? ""}
            onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
            type="email"
            className="flex-1 outline-0"
            placeholder="votre addresse email"
          />
        </div>
        <button className="inline-flex justify-center items-center p-2 rounded-2xl bg-[#0B6B78] gap-3 text-white hover:bg-[#08555f] duration-150 ease-in transition-colors cursor-pointer">
          Envoyer un lien <ArrowRight />
        </button>
      </form>
      <div className="flex gap-2 items-center px-6 p-3 rounded-2xl bg-[#E0F2F4]">
        <Shield className="text-[#0B6B78]" size={15} />
        <p className="text-gray-500 text-sm">
          Le lien de réinitialisation sera valide pendant{" "}
          <span className="font-bold text-black">30 minutes</span>. Vérifiez
          également votre dossier spam.
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 text-gray-500">
        <p>Vous vous souvenez de votre mot de passe ?</p>
        <Link to={"/auth/login"} className="text-[#0B6B78] font-bold">
          Se connecter
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;

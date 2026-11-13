import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import RegisterForm from "../../components/forms/register"


const Register = () => {
  return (
    <div className="flex flex-col gap-5">
      <Link to={'/auth/login'} className="flex items-center gap-1 duration-300 text-gray-500 hover:text-black ">
        <ArrowLeft size={15}/>
        Retour à la Connexion
      </Link>
      <div className="space-y-3">
        <h2 className="font-black text-3xl">Créer un compte</h2>
        <p className="text-gray-500">Rejoignez MediRV gratuitement et prenez en main votre santé dès aujourd'hui.</p>
      </div>
      <RegisterForm/>
      <div className="flex justify-center items-center">
        <p className="text-gray-500">Vous avez déja un compte ? <Link to={'/auth/login'} className="text-[#0B6B78] font-bold">Se connecter</Link></p>
      </div>
    </div>
  )
}

export default Register
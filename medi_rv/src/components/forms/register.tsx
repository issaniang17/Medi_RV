import {
  ArrowRight,
  Eye,
  EyeClosed,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

type registerProps = {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  confirmPassword: string;
  phone: string;
  acceptConditon: boolean;
};
const RegisterForm = () => {
    const navigate = useNavigate()
  const [viewPassword, setViewPassword] = useState(false);
  const [register, setRegister] = useState<registerProps>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    acceptConditon: false,
  });
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value === "false" || value === "true" ? Boolean(value) : value,
    }));
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !register.email ||
      !register.firstName ||
      !register.lastName ||
      !register.phone ||
      !register.password ||
      !register.confirmPassword
    ) {
      return toast.error("Veillez remplir tous les champs svp");
    }
    if (register.password.length < 8 || register.confirmPassword.length < 8) {
      return toast.warning(
        "Veillez saisir au moins 8 caractéres pour votre mot de passe",
      );
    } else if (register.password !== register.confirmPassword) {
      return toast.error("Les deux mots de passe ne correspond pas");
    }
    console.log(register);
    localStorage.setItem('Register', JSON.stringify(register))
    navigate('/auth/login')
  };
  return (
    <form
      className="flex flex-col justify-between gap-4 font-semibold mt-3 mb-5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 md:justify-between md:flex-row">
        <div className="w-full md:w-1/2">
          <label htmlFor="firstName">Prénom</label>
          <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400 ">
            <User className="text-gray-600/80" />
            <input
              type="text"
              placeholder="Anna"
              name="firstName"
              value={register.firstName.trim().toLowerCase()}
              onChange={handleChange}
              className="flex-1 outline-0"
              required
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <label htmlFor="lastName">Nom</label>

          <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400">
            <User className="text-gray-600/80" />
            <input
              className="flex-1 outline-0"
              type="text"
              placeholder="Niang"
              name="lastName"
              value={register.lastName.trim().toLocaleLowerCase()}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      <label htmlFor="email">Adresse email</label>
      <div className="flex justify-between gap-3 p-2 rounded-lg border bg-gray-200 border-gray-400">
        <Mail className="text-gray-600/80" />
        <input
          type="email"
          className="flex-1 outline-0"
          placeholder="vous@example.com"
          value={register.email.trim().toLowerCase()}
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <label htmlFor="phone">Téléphone</label>
      <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400">
        <Phone className="text-gray-600/80"/>
        <input
          className="flex-1 outline-0"
          type="tel"
          name="phone"
          id="phone"
          placeholder="771234567"
          pattern="7[07568][0-9]{3}[0-9]{2}[0-9]{2}"
          value={register.phone.trim().split(' ').join('')}
          onChange={handleChange}
          required
        />
      </div>
      <label htmlFor="password">Mot de passe</label>

      <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400">
        <Lock className="text-gray-600/80" />
        <input
          type={viewPassword ? "text" : "password"}
          className="flex-1 outline-0"
          placeholder="8 caractéres minimum"
          name="password"
          value={register.password.trim().toLowerCase()}
          onChange={handleChange}
          required
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
      <label htmlFor="confirmPassword">Confirmer le mot de passe</label>

      <div className="flex justify-between p-2 gap-3 rounded-lg border bg-gray-200 border-gray-400">
        <Lock className="text-gray-600/80" />
        <input
          type={viewPassword ? "text" : "password"}
          className="flex-1 outline-0"
          placeholder="8 caractéres minimum"
          name="confirmPassword"
          value={register.confirmPassword.trim().toLowerCase()}
          onChange={handleChange}
          required
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
            name="acceptConditon"
            id="acceptConditon"
            value={String(register.acceptConditon)}
            onChange={handleChange}
            required
          />
          <label htmlFor="acceptConditon">
            J'accepte les{" "}
            <Link to={"/cgu"} className="text-[#0B6B78] hover:underline">
              conditions d'utilisation
            </Link>{" "}
            et de{" "}
            <Link
              to={"/confidentialite"}
              className="text-[#0B6B78] hover:underline"
            >
              Confidentialité
            </Link>{" "}
          </label>
        </div>
      </div>
      <button className="inline-flex justify-center items-center p-2 rounded-2xl bg-[#0B6B78] gap-3 text-white hover:bg-[#08555f] duration-150 ease-in transition-colors cursor-pointer">
        Créer mon compte <ArrowRight />
      </button>
    </form>
  );
};

export default RegisterForm;

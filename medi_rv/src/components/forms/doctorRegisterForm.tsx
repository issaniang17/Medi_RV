import { useState } from "react";
import type { DoctorRegister } from "../../types/doctor";
import { Link, useNavigate } from "react-router-dom";
import { Stethoscope } from "lucide-react";
import { toast } from "sonner";

const DoctorRegisterForm = ({style}:{style?:string}) => {
  const navigate = useNavigate()
  const [doctorForm, setDoctorForm] = useState<DoctorRegister>({
    address: "",
    city: "",
    phone: "",
    email: "",
    firstName: "",
    gender: "male",
    lastName: "",
    order_number: "",
    password: "",
    speciality: "",
    etablissement_name:''
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setDoctorForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !doctorForm.address ||
      !doctorForm.lastName ||
      !doctorForm.etablissement_name||
      !doctorForm.firstName ||
      !doctorForm.email ||
      !doctorForm.city ||
      !doctorForm.order_number ||
      !doctorForm.speciality ||
      !doctorForm.phone
    ) {
      return toast.error('Veiller remplir tous les champs')
    }
    if(!doctorForm.password || doctorForm.password.length < 8){
      return toast.error('Le mot de passe doit comporter 8 caractéres au moins')
    }
    console.log(doctorForm)
    localStorage.setItem('Doctor', JSON.stringify(doctorForm));
    navigate('/doctor/dashboard')
  };
  return (
    <form
      className={`${style} flex flex-col justify-center gap-5 px-3 py-5 rounded-2xl shadow-sm/40`}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">
        {" "}
        Nom et Prénom <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col justify-evenly  gap-3 md:flex-row">
        <select
          name="gender"
          id="gender"
          onChange={handleChange}
          className="rounded-full  outline-[#0b6b78b6] outline-1 "
        >
          <option value="male">M.</option>
          <option value="female">Mme</option>
        </select>
        <input
          type="text"
          placeholder="Nom"
          name="lastName"
          value={doctorForm.lastName.trim().toLowerCase()}
          onChange={handleChange}
          className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
        />
        <input
          className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
          type="text"
          placeholder="Prénom"
          name="firstName"
          value={doctorForm.firstName.trim().toLowerCase()}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="email"
            value={doctorForm.email.trim().toLowerCase()}
            name="email"
            onChange={handleChange}
            placeholder="email@example.com"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="phone">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="tel"
            value={doctorForm.phone}
            name="phone"
            onChange={handleChange}
            placeholder="XX XXX XX XX"
            pattern="7[05678][\s]?[0-9]{3}[\s]?[0-9]{2}[\s]?[0-9]{2}"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">
          Mot de passe <span className="text-red-500">*</span>
        </label>
        <input
          className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
          type="password"
          value={doctorForm.password.trim().toLowerCase()}
          name="password"
          onChange={handleChange}
          placeholder="Min. 8 caractéres"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="address">
            Adresse <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="text"
            value={doctorForm.address.trim().toLowerCase()}
            name="address"
            onChange={handleChange}
            placeholder="Tapez votre adresse"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="city">
            Ville <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="text"
            value={doctorForm.city.trim().toLowerCase()}
            name="city"
            onChange={handleChange}
            placeholder="Ex: Dakar"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="speciality">
            Spécialité <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="text"
            value={doctorForm.speciality.trim().toLowerCase()}
            name="speciality"
            onChange={handleChange}
            placeholder="Ex: Dentiste"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="order_number">
            Numéro ONMS <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="text"
            value={doctorForm.order_number.trim().toLowerCase()}
            name="order_number"
            onChange={handleChange}
            placeholder="Numéro ONMS"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
          <label htmlFor="etablissement_name">
            Etalissement <span className="text-red-500">*</span>
          </label>
          <input
            className="rounded-full  outline-[#0b6b78b6] outline-1 p-2"
            type="text"
            value={doctorForm.etablissement_name.trim().toLowerCase()}
            name="etablissement_name"
            onChange={handleChange}
            placeholder="Donnez le nom de votre etablisement"
          />
        </div>
      <div className="space-x-3 text-gray-500">
        <input type="checkbox" name="condition" id="condition" required />
        <label htmlFor="condition">
          J'accepte les{" "}
          <Link
            className="text-[#0B6B78] hover:underline font-semibold"
            to={"/cgu"}
          >
            CGU
          </Link>{" "}
          et la
          <Link
            className="text-[#0B6B78] hover:underline font-semibold"
            to={"/confidentialite"}
          >
            {" "}
            politique de confidentialité
          </Link>
        </label>
      </div>
      <div className="bg-[#E0F2F4] rounded-2xl p-3 flex gap-3 items-center">
        <Stethoscope size={15} color="#0B6B78" className="shrink-0" />
        <p className="text-gray-500">
          Pour garantir la qualité du service,{" "}
          <span className="text-[#0B6B78] font-semibold">MediRV</span> vous
          contactera afin de vérifier que vous êtes bien un médecin.
        </p>
      </div>
      <div className="flex flex-col justify-evenly gap-3 items-center text-gray-500">
        <button className="bg-[#0B6B78] p-3 text-white font-semibold rounded-lg">
          S'inscrire maintenant
        </button>
        <Link to={"/"}>Annuler</Link>
        <p>
          Vous êtes déja inscrit ?{" "}
          <Link to={"/auth/login"} className="text-[#0B6B78] font-semibold">
            Se connecter
          </Link>
        </p>
      </div>
    </form>
  );
};

export default DoctorRegisterForm;

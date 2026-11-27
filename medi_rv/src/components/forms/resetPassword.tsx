import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ResetPassword = () => {
  const [resetForm, setResetForm] = useState<{
    password: string;
    confirmPassword: string;
  }>({ confirmPassword: "", password: "" });
  const [viewPassword, setViewPassword] = useState(false);
  const handleView = () => {
    setViewPassword(!viewPassword);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResetForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit =(e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!resetForm.confirmPassword || !resetForm.password){
        return toast.error('Veiller remplir tous les champs')
    }
    if(resetForm.password !== resetForm.confirmPassword){
      return toast.error('Mot de passe non identique')   
    }
    if(resetForm.confirmPassword.length < 8 || resetForm.password.length < 8){
        return toast.error('Mot de passe trop court')
    }
    setResetForm({ confirmPassword: "", password: "" })
    handleView()
  }
  return (
    <form className="flex flex-col justify-center gap-5 px-3 py-5 rounded-2xl shadow-sm/40 md:w-1/2 md:mx-auto" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center rounded-lg border border-[#0b6b78b6] p-2" >
        <input
          type={viewPassword ? "text" : "password"}
          placeholder="Entrez le nouveau mot de passe"
          className="flex-1 outline-0"
          onChange={handleChange}
          name="password"
          value={resetForm.password.trim().toLowerCase()}
        />
        {viewPassword ?  <Eye onClick={handleView} className="text-gray-500"/> : <EyeClosed onClick={handleView} className="text-gray-500"/>}
      </div>
      <div className="flex justify-between items-center rounded-lg border border-[#0b6b78b6] p-2">
        <input
          type={viewPassword ? "text" : "password"}
          placeholder="Confirmer le mot de passe"
          className="flex-1 outline-0"
          onChange={handleChange}
          name="confirmPassword"
          value={resetForm.confirmPassword.trim().toLowerCase()}
        />
        {viewPassword ?  <Eye onClick={handleView} className="text-gray-500"/> : <EyeClosed onClick={handleView} className="text-gray-500"/>}
      </div>
      <button className="bg-[#0B6B78] text-white rounded-lg p-2">
        Changer de mot de passe
      </button>
    </form>
  );
};

export default ResetPassword;

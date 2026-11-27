import { UserLock, UserRoundPlus } from "lucide-react";
import ActionCard from "./actionCard";
import { useState } from "react";
import RegisterForm from "../../components/forms/register";
import DoctorRegisterForm from "../../components/forms/doctorRegisterForm";
import ResetPassword from "../../components/forms/resetPassword";

const Setting = () => {
  const [addUser, setAddUser] = useState(false);
  const [addDoctor, setAddDoctor] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const handleAddUser = () => {
    setAddUser(!addUser);
    setAddDoctor(false);
    setChangePassword(false)
  };
  const handleAddDoctor = () => {
    setAddDoctor(!addDoctor);
    setAddUser(false);
    setChangePassword(false)
  };
  const handleChangePassword =()=>{
    setChangePassword(!changePassword)
    setAddUser(false);
    setAddDoctor(false);
  }
  return (
    <div className=" flex flex-col gap-4 py-8 px-6 md:py-10 md:px-8">
      <ActionCard
        icon={UserRoundPlus}
        title="Ajouter un utilisateur"
        view={handleAddUser}
        key={"Ajouter un utilisateur"}
      />
      <ActionCard
        icon={UserRoundPlus}
        title="Ajouter un médecin"
        view={handleAddDoctor}
        key={"Ajouter un médecin"}
      />
      <ActionCard
        icon={UserLock}
        title="Changer le mot de passe"
        view={handleChangePassword}
        key={"reset password"}
      />
      {addUser && <RegisterForm />}
      {addDoctor && <DoctorRegisterForm style="md:w-1/2 md:mx-auto" />}
      {changePassword && <ResetPassword/>}
    </div>
  );
};

export default Setting;

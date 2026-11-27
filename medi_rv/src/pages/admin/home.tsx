import { Calendar, ShieldCheck, Stethoscope, Users2 } from "lucide-react";
import CardRv from "../../components/patients/cardRvStats";
import WelcomeCard from "../../components/patients/welcomeCard";
import { useState } from "react";
import { patientRV } from "../../constante";
import ActionRapide from "./actionRapide";

const AdminHome = () => {
  const [all, setAll] = useState(patientRV);
  const admin = localStorage.getItem("Register");
  if (!admin) {
    return null;
  }
  const adminInfo = JSON.parse(admin);
  return (
    <div className="flex flex-col gap-5">
      <div className="w-[95%] mx-auto text-white">
        <WelcomeCard
          bgColor="bg-linear-to-br from-[#0D2E35] to-[#143F44] leading-relaxed"
          name={`${adminInfo.firstName}`}
          url="/admin/doctors/"
          urlIcon={ShieldCheck}
          urlName="Examiner les demandes"
          linkStyleAdmin="bg-[#E0F2F4] text-[#0B6B78]"
          adminIntro
          pendingDoctor={`${all.filter((item) => item.status === "pending").length} profil(s) médecin(s) nécessite(nt) votre validation.`}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 px-4 py-6 md:py-8 ">
        <CardRv
          icon={Users2}
          stats={all.length}
          styleIcon="bg-[#E0F2F4] text-[#0B6B78]"
          title="Patients inscrits"
          cardStyle="flex-col-reverse items-start leading-relaxed bg-white"
          positionParagraphe="flex-col-reverse flex w-full my-4"
        />
        <CardRv
          icon={Stethoscope}
          stats={all.length}
          styleIcon="bg-[#F5F3FF] text-[#7008E7]"
          title="Médecins référencés"
          cardStyle="bg-white flex-col-reverse items-start leading-relaxed"
          positionParagraphe="flex-col-reverse flex w-full my-4"
        />
        <CardRv
          icon={Calendar}
          stats={all.length}
          styleIcon="bg-[#FFFBEB] text-[#BB4D00]"
          title="Rendez-vous ce mois"
          cardStyle="bg-white flex-col-reverse items-start leading-relaxed"
          positionParagraphe="flex-col-reverse flex w-full my-4"
        />
      </div>
      <ActionRapide/>
    </div>
  );
};

export default AdminHome;

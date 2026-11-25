import { Calendar, CalendarDays, CircleCheckBig, Stethoscope } from "lucide-react";
import type { registerProps } from "../../components/forms/register";
import CardRv from "../../components/patients/cardRvStats";
import WelcomeCard from "../../components/patients/welcomeCard";

const Acceuil = () => {
  const userInfo: registerProps = JSON.parse(
    localStorage.getItem("Register") || "",
  );

  return (
    <div className="py-10">
      <div className="w-[95%] mx-auto text-white font-bold text-xl py-5">
        <WelcomeCard name={!userInfo ? "" : userInfo.firstName} bgColor="bg-linear-to-r from-[#0B6370] to-[#0D343C]" urlIcon={CalendarDays} url="/auth/me/appointments" urlName="Voir mes Rendez-vous" statAccepted={2} acceptedgWord="rendez-vous"/>
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 py-8 bg-white">
        <CardRv
          title="RDV à venir"
          stats={2}
          styleIcon="bg-[#E0F2F4] text-[#15717D]"
          icon={Calendar}
        />
        <CardRv
          title="RDV réalisé"
          stats={3}
          styleIcon="bg-[#ECFDF5] text-[#22A77B]"
          icon={CircleCheckBig}
        />
        <CardRv
          title="Médecins consultés"
          stats={4}
          styleIcon="bg-[#FFFBEB] text-[#E17201]"
          icon={Stethoscope}
        />
        <CardRv
          title="RDV annulé"
          stats={1}
          styleIcon="bg-[#F5F3FF] text-[#7F22FE]"
          icon={Calendar}
        />
      </div>
    </div>
  );
};

export default Acceuil;

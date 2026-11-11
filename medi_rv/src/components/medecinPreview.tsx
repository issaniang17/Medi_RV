import { Link } from "react-router-dom";
import InfoCadre from "./info_cadre";
import { ArrowRight } from "lucide-react";
import { previewDoctorsExample } from "../constante";
import DoctorCard from "./doctorCard";

const MedecinPreview = () => {
  return (
    <div
      className="bg-[#F4F7F9] px-8 py-10 text-black flex flex-col gap-5"
      id="medecins"
    >
      <InfoCadre
        width="w-40"
        style="text-sm font-semibold"
        info="Médecins vérifiés"
        key={"medecins"}
      />
      <div className="flex flex-col  gap-5 md:flex-row md:justify-between md:items-end">
        <h2 className="font-bold text-2xl md:text-3xl">
          Nos médecins disponibles
        </h2>
        <div className="flex items-center gap-2 text-[#0B6B78] text-lg">
          <Link to={"/doctors"} className="hover:-translate-x-0.5 duration-150">
            Voir tous les médecins
          </Link>
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {previewDoctorsExample.map((item, index) => (
          <DoctorCard
            adresse={item.adresse}
            disponibilite={item.disponibilite}
            nom={item.nom}
            prenom={item.prenom}
            prix={item.prix}
            specialite={item.specialite}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MedecinPreview;

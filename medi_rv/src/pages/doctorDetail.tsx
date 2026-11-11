import { useNavigate, useParams } from "react-router-dom";
import { previewDoctorsExample } from "../constante";
import { useEffect } from "react";
import { toast } from "sonner";
import DoctorCard from "../components/doctorCard";

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = previewDoctorsExample.find((doc) => doc.id === Number(id));
  useEffect(() => {
    if (!doctor) {
      navigate("/doctors");
      toast.error("Medecin non identifié");
    }
  }, [doctor, navigate]);

  return (
    <div className="h-screen  flex justify-center items-center text-black">
      <DoctorCard
        adresse={doctor?.adresse ?? ""}
        disponibilite={doctor?.disponibilite ?? ""}
        nom={doctor?.nom ?? ""}
        prenom={doctor?.prenom ?? ""}
        prix={doctor?.prix ?? ""}
        id={doctor?.id ?? 0}
        specialite={doctor?.specialite ?? ""}
        link
        size="w-[90%] md:w-1/2"
      />
    </div>
  );
};

export default DoctorDetail;

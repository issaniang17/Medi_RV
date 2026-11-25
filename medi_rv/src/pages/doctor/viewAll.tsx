import { toast } from "sonner";
import WelcomeCard from "../../components/patients/welcomeCard";
import type { DoctorRegister } from "../../types/doctor";
import {
  Activity,
  ArrowRight,
  Calendar,
  Clock,
  Info,
  UsersRound,
} from "lucide-react";
import { patientRV, statusStyle } from "../../constante";
import CardRv from "../../components/patients/cardRvStats";
import { Link } from "react-router-dom";
import DoctorRvCard from "../../components/doctor/acceptedRvCard";
import { useState } from "react";
import type { rvDetail } from "../../types/rvDetail";
import DetailOneRv from "../../components/detailOneRv";

const ViewAll = () => {
  const [viewDetailRv, setViewDetailRv] = useState(false);
  const [rvDoctor, setRvDoctor] = useState(patientRV);
  const [styleStatus, setStyleStatus] = useState<{
    status: string;
    style: string;
  }>({ status: "", style: "" });
  const [oneRv, setOneRv] = useState<rvDetail>({
    date: "",
    drImage: "",
    firstName: "",
    heure: "",
    id: 0,
    lastName: "",
    lieu: "",
    speciality: "",
    status: "",
  });
  const statStyle =
    "rounded-full inline-flex justify-center items-center p-1 bg-[#E0F2F4] text-[#0B6B78] size-6";

  const consultations = rvDoctor.filter(
    (item) => item.status === "accepted",
  ).length;

  const aVenir = rvDoctor.filter((item) => item.status === "pending").length;

  const tauxOccupation =
    (rvDoctor.filter((item) => item.status !== "rejected").length /
      rvDoctor.length) *
    100;

  if (!localStorage.getItem("Doctor")) {
    return toast.error("Impossible de recuperer tes infos");
  }
  const drInfo: DoctorRegister = JSON.parse(
    localStorage.getItem("Doctor") ?? "",
  );
  const handleView = () => {
    setViewDetailRv(!viewDetailRv);
    if (!viewDetailRv) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const handleViewDetail = (id: number) => {
    const rv = rvDoctor.find((item) => item.id === id);
    if (!rv) {
      return null;
    }
    setOneRv(rv);
    setStyleStatus({
      status: oneRv.status,
      style: statusStyle.filter((item) => item.status === rv.status)[0].style,
    });
    handleView();
  };
  const handleReject = (id: number) => {
    const rv = rvDoctor.find((item) => item.id === id);
    if (!rv) {
      return null;
    }
    const updateStatus = { ...rv, status: "rejected" };
    setOneRv(updateStatus);
    setRvDoctor(rvDoctor.map((prev) => (prev.id === id ? updateStatus : prev)));
  };
  const handleAccept = (id: number) => {
    const rv = rvDoctor.find((item) => item.id === id);
    if (!rv) {
      return null;
    }
    const updateStatus = { ...rv, status: "accepted" };
    setOneRv(updateStatus);
    setRvDoctor(rvDoctor.map((prev) => (prev.id === id ? updateStatus : prev)));
  };
  return (
    <div className="flex flex-col justify-center gap-5 space-y-8   relative">
      <div className="w-[95%] mx-auto text-white">
        <WelcomeCard
          bgColor="bg-linear-to-br from-[#0D2E35] to-[#133D42] leading-relaxed"
          name={`Dr ${drInfo.lastName}`}
          url="/doctor/dashboard/availabilities/"
          urlIcon={Clock}
          urlName="Gérer mes disponibilités"
          acceptedgWord="consultations"
          pendingWord="demande"
          statAccepted={consultations}
          statPending={aVenir}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 px-4 py-6 md:py-8">
        <CardRv
          icon={Calendar}
          stats={consultations}
          styleIcon="bg-[#DAEEF0] text-[#0B6B78]"
          title="Consultations(s)"
          cardStyle="bg-white flex-col-reverse items-start gap-2"
          drCard
          drCardTitle="à venir"
          positionParagraphe="flex flex-col-reverse text-black"
        />
        <CardRv
          icon={UsersRound}
          stats={rvDoctor.length}
          styleIcon="bg-[#ECFDF5] text-[#037B57]"
          title="Patients"
          cardStyle="bg-white flex-col-reverse items-start gap-2"
          drCard
          drCardTitle=""
          positionParagraphe="flex flex-col-reverse text-black"
        />
        <CardRv
          icon={Activity}
          stats={tauxOccupation}
          percent
          styleIcon="bg-[#F5F3FF] text-[#7612E8]"
          title="Consultation(s)"
          cardStyle="bg-white flex-col-reverse items-start gap-2"
          drCard
          drCardTitle="Cette semaine"
          positionParagraphe="flex flex-col-reverse text-black"
        />
        <CardRv
          icon={Info}
          stats={aVenir}
          styleIcon="bg-[#FFFBEB] text-[#BB4D00]"
          title="Demande(s) en attente"
          cardStyle="bg-white flex-col-reverse items-start gap-2"
          drCard
          drCardTitle="à traiter"
          positionParagraphe="flex flex-col-reverse text-black"
        />
      </div>
      <div className="flex flex-col text-black gap-5">
        <div className="flex justify-between items-center px-3">
          <h2 className="font-bold">
            <span className="text-2xl">Mes Rendez-vous</span>{" "}
            <span className={statStyle}>{consultations}</span>
          </h2>
          <Link
            to="/doctor/appointments/"
            className="flex items-center gap-1 text-[#0B6B78]"
          >
            Voir tous <ArrowRight size={15} />
          </Link>
        </div>
        <div className="flex flex-col gap-3 overflow-x-scroll sm:scrollbar-none">
          {rvDoctor
            .filter((item) => item.status === "accepted")
            .map((item) => (
              <DoctorRvCard
              width="w-150 sm:w-full"
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                date={item.date}
                id={item.id}
                accepted
                heure={item.heure}
                motif="Douleur"
                voirDetails={handleViewDetail}
                accepter={handleViewDetail}
                actionStyle={styleStatus.style}
                refuser={handleViewDetail}
                status={item.status}
                terminer={handleViewDetail}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col text-black gap-5">
        <div className="flex justify-between items-center px-3">
          <h2 className="font-bold">
            <span className="text-2xl">Demandes en attente</span>{" "}
            {aVenir !== 0 && <span className={statStyle}>{aVenir}</span>}
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {rvDoctor
            .filter((item) => item.status === "pending")
            .map((item) => (
              <DoctorRvCard
              
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                date={item.date}
                id={item.id}
                pending
                heure={item.heure}
                motif="Douleur"
                voirDetails={handleViewDetail}
                accepter={handleAccept}
                actionStyle={styleStatus.style}
                refuser={handleReject}
                status={item.status}
                terminer={handleViewDetail}
              />
            ))}
        </div>
      </div>
      {viewDetailRv && (
        <DetailOneRv
          date={oneRv.date}
          firstName={oneRv.firstName}
          heure={oneRv.heure}
          id={oneRv.id}
          lastName={oneRv.lastName}
          lieu={oneRv.lieu}
          motif="Douleur"
          status={oneRv.status}
          style={styleStatus.style}
          viewDetail={handleView}
        />
      )}
    </div>
  );
};

export default ViewAll;

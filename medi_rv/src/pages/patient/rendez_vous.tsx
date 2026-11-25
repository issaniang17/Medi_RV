import {
  CalendarCheck,
  CalendarClock,
  CalendarX,
  CircleCheckBig,
  Search,
} from "lucide-react";
import CardRv from "../../components/patients/cardRvStats";
import LinkBtn from "../../components/linkBtn";
import { patientRV, statusStyle } from "../../constante";
import RvCard from "../../components/patients/rvCard";
import { useState } from "react";
import type { rvDetail } from "../../types/rvDetail";
import DetailOneRv from "../../components/detailOneRv";

const RendezVous = () => {
  const [styleStatus, setStyleStatus] = useState<{
    status: string;
    style: string;
  }>({ status: "", style: "" });
  const [viewRvDetail, setViewRvDetail] = useState(false);
  const [rv, setRv] = useState<rvDetail[]>(patientRV);
  const [rvInfo, setRvInfo] = useState<rvDetail>({
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
  const handleViewDetail = () => {
    setViewRvDetail(!viewRvDetail);
    if (!viewRvDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const handleReject = (id: number) => {
    const oneRv = rv.find((rv) => rv.id === id);
    if (!oneRv) {
      return null;
    }
    const updateStatus = { ...oneRv, status: "rejected" };
    setRvInfo(updateStatus);
    setRv(rv.map((prev) => (prev.id === id ? updateStatus : prev)));
  };
  const handleViewRv = (id: number) => {
    const oneRv = rv.find((rv) => rv.id === id);
    if (!oneRv) {
      return null;
    }
    setRvInfo(oneRv);

    setStyleStatus({
      status: oneRv.status,
      style: statusStyle.filter((item) => item.status === oneRv.status)[0]
        .style,
    });
    handleViewDetail();
  };
  return (
    <div className="grid gap-5 py-10">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between px-6 py-3">
        <div className="flex flex-col space-y-3">
          <h2 className="font-black text-3xl">Mes rendez-vous</h2>
          <p className="text-gray-500">
            Retrouvez et gérez l’ensemble de vos consultations médicales.
          </p>
        </div>
        <div className="flex items-end">
          <LinkBtn
            icon={<Search />}
            name="Trouver un médecin"
            url="/doctors"
            style="bg-[#0B6B78] w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 py-8">
        <CardRv
          cardStyle="bg-white"
          icon={CalendarCheck}
          stats={2}
          styleIcon="bg-[#E0F2F4] text-[#0B6B78]"
          title="À venir"
          key={"a-venir"}
          positionParagraphe="flex-col-reverse flex"
        />
        <CardRv
          cardStyle="bg-white"
          icon={CalendarClock}
          stats={4}
          styleIcon="bg-[#FFFBEB] text-[#BB4D00]"
          title="En attente"
          key={"en-attente"}
          positionParagraphe="flex-col-reverse flex"
        />
        <CardRv
          cardStyle="bg-white"
          icon={CircleCheckBig}
          stats={3}
          styleIcon="bg-[#ECFDF5] text-[#007A55]"
          title="Terminé"
          key={"terminé"}
          positionParagraphe="flex-col-reverse flex"
        />
        <CardRv
          cardStyle="bg-white"
          icon={CalendarX}
          stats={1}
          styleIcon="bg-[#FCF4F4] text-[#C8332B]"
          title="Annulé"
          key={"annulé"}
          positionParagraphe="flex-col-reverse flex"
        />
      </div>
      <div className="flex flex-col gap-5 px-6 md:px-8  py-8 md:py-12">
        {rv.map((item, index) => (
          <RvCard
            date={item.date}
            drImage={item.drImage}
            firstName={item.firstName}
            lastName={item.lastName}
            heure={item.heure}
            id={item.id}
            lieu={item.lieu}
            speciality={item.speciality}
            status={item.status}
            annuler={handleReject}
            detail={handleViewRv}
            key={index}
          />
        ))}
      </div>
      {viewRvDetail && (
        <DetailOneRv
          date={rvInfo.date}
          firstName={rvInfo.firstName}
          heure={rvInfo.heure}
          id={rvInfo.id}
          lastName={rvInfo.lastName}
          lieu={rvInfo.lieu}
          speciality={rvInfo.speciality}
          motif="Douleur"
          status={rvInfo.status}
          style={styleStatus.style}
          image={rvInfo.drImage}
          viewDetail={handleViewRv}
        />
      )}
    </div>
  );
};

export default RendezVous;

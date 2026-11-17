import {
  CalendarCheck,
  CalendarClock,
  CalendarX,
  CircleCheckBig,
  Search,
  X,
} from "lucide-react";
import CardRv from "../../components/patients/cardRvStats";
import LinkBtn from "../../components/linkBtn";
import { patientRV, statusStyle } from "../../constante";
import RvCard from "../../components/patients/rvCard";
import { useState } from "react";
import type { rvDetail } from "../../types/rvDetail";

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
  const handleViewDetail = ()=>{
    setViewRvDetail(!viewRvDetail)
    if (!viewRvDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }
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
    handleViewDetail()

    
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
        <div className="flex justify-center items-center gap-3 px-4 fixed z-300 h-screen top-0 left-0 w-full backdrop-blur-sm py-2 md:py-10">
          <div className="w-full md:w-[50%] leading-relaxed flex flex-col justify-center bg-white h-full shadow-sm/50 rounded-2xl my-5 px-8  divide-y divide-gray-300">
            <div className="flex justify-between items-center py-2">
              <p>Détails du rendez-vous</p>
              <div
                className="p-2 rounded-2xl bg-[#F3FAFB] text-[#0B6B78]"
                onClick={handleViewDetail}
              >
                <X />
              </div>
            </div>
            <div className="flex md:justify-between flex-col gap-2 md:flex-row w-full py-2 md:py-4 bg-[#F3FAFB] px-4 rounded-2xl ">
              <div className="flex gap-2">
                <img
                  src={rvInfo.drImage}
                  alt="dr-image"
                  className="w-20 rounded-2xl"
                />
                <div className="flex flex-col items-center gap-1">
                  <p>
                    Dr. {rvInfo.firstName} {rvInfo.lastName}
                  </p>
                  <p>{rvInfo.speciality}</p>
                </div>
              </div>
              <div className=" text-sm inline-flex items-center justify-center shrink-0 p-1  w-full md:w-1/2">
                <p
                  className={`rounded-full border p-1 text-center w-full md:w-1/2 ${styleStatus.style}`}
                >
                  {" "}
                  {rvInfo.status === "accepted" && <p>À venir</p>}
                  {rvInfo.status === "rejected" && <p>Annulé</p>}
                  {rvInfo.status === "cancelled" && <p>Terminé</p>}
                  {rvInfo.status === "pending" && <p>En attente</p>}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3 py-2 md:py-4">
              <p>Date</p>
              <p className="justify-start flex w-1/2">{rvInfo.date}</p>
            </div>
            <div className="flex justify-between items-center gap-3 py-2 md:py-4">
              <p>Heure</p>
              <p className="justify-start flex w-1/2">{rvInfo.heure}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-2 md:py-4">
              <p>Adresse</p>
              <p className="justify-start flex w-1/2">{rvInfo.lieu}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-2 md:py-4">
              <p>Motif</p>
              <p className="justify-start flex w-1/2">Douleur</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-2 md:py-4">
              <p>Référence</p>
              <p className="justify-start flex w-1/2">RV-00{rvInfo.id}</p>
            </div>
            <button
              className="text-white bg-[#0B6B78] p-1 rounded-lg w-full"
              onClick={handleViewDetail}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RendezVous;

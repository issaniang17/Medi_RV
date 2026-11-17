import { Calendar, CircleX, Clock, Eye, MapPinIcon } from "lucide-react";
import { statusStyle } from "../../constante";
import { useEffect, useState } from "react";

export type rvCardProps = {
  drImage: string;
  speciality: string;
  firstName: string;
  lastName: string;
  status: string;
  date: string;
  heure: string;
  lieu: string;
  detail: (id: number) => void;
  annuler: (id: number) => void;
  id: number;
};

const RvCard = ({
  date,
  detail,
  drImage,
  firstName,
  heure,
  lastName,
  lieu,
  speciality,
  status,
  annuler,
  id,
}: rvCardProps) => {
    const [colorStatus, setColorStatus] = useState<{status:string, style:string}>({status:'',style:''})
    useEffect(()=>{
        const handleChangeColor = ()=>{
            const style = statusStyle.filter(item => item.status === status)
            setColorStatus({status:style[0].status, style:style[0].style})
        }
        handleChangeColor()
    },[status])
  return (
    <div className="px-4 py-6 flex flex-col justify-between bg-white rounded-2xl shadow-sm/30">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="rounded-2xl w-20">
              <img src={drImage} alt="profil-doctor" className="rounded-2xl" />
            </div>
            <div>
              <p>
                Dr. {firstName} {lastName}
              </p>
              <p>{speciality}</p>
            </div>
          </div>
          <div
            
          >
            {status === "accepted" && <p className={`rounded-full p-2 flex justify-center items-center ${colorStatus.style}`}>À venir</p>}
            {status === "rejected" && <p className={`rounded-full p-2 flex justify-center items-center ${colorStatus.style}`}>Annulé</p>}
            {status === "cancelled" && <p className={`rounded-full p-2 flex justify-center items-center ${colorStatus.style}`}>Terminé</p>}
            {status === "pending" && <p className={`rounded-full p-2 flex justify-center items-center ${colorStatus.style}`}>En attente</p>}
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-evenly md:justify-center md:items-center md:flex-row md:gap-5 md:py-4">
          <div className="flex items-center gap-2">
            <Calendar className="text-[#0B6B78]"/>
            {date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-[#0B6B78]"/>
            {heure}
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="text-[#0B6B78]"/>
            {lieu}
          </div>
        </div>
      </div>
      <div className="bg-[#F4F7F9] border-t border-gray-500 py-4 flex flex-col md:justify-end items-center gap-2 md:flex-row px-4">
        <div className="rounded-full py-1 px-2 flex gap-2 items-center justify-center border border-[#0B6B78] text-[#0B6B78] cursor-pointer" onClick={() => detail(id)}>
            <Eye/>
          <p>voir detail</p>
        </div>
        {["accepted","pending"].includes(status)   && (
            <div
              className="flex justify-center items-center gap-2 rounded-full bg-[#F6F0F1] text-[#CE4942] border border-[#CE4942] p-1 cursor-pointer"
              onClick={() => annuler(id)}
            >
              <CircleX />
              <p>Anuller le rendez-vous</p>
            </div>
          )}
      </div>
    </div>
  );
};

export default RvCard;

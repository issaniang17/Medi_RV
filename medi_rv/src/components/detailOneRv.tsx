import { X } from 'lucide-react'

import InitialName from './initialName'

type detailRv = {
    viewDetail:(id:number)=>void,
    image?:string,
    firstName:string,
    lastName:string,
    speciality?:string,
    status:string,
    lieu:string,
    heure:string,
    date:string,
    id:number,
    motif:string,
    style:string

}
const DetailOneRv = ({date,firstName,heure,id,image,lastName,lieu,motif,status,viewDetail,speciality,style}:detailRv) => {
  return (
     <div className="flex justify-center items-center gap-3 px-4 fixed z-300 h-screen top-0 left-0 w-full backdrop-blur-sm py-2 md:py-10">
          <div className="w-full md:w-[50%] leading-relaxed flex flex-col justify-evenly  bg-white h-full shadow-sm/50 rounded-2xl my-5 px-8  divide-y divide-gray-300">
            <div className="flex justify-between items-center py-2">
              <p>Détails du rendez-vous</p>
              <div
                className="p-2 rounded-2xl bg-[#F3FAFB] text-[#0B6B78]"
                onClick={()=>viewDetail(id)}
              >
                <X />
              </div>
            </div>
            <div className="flex md:justify-between flex-col gap-2 md:flex-row w-full py-2 md:py-4 bg-[#F3FAFB] px-4 rounded-2xl ">
              <div className="flex gap-2">
                {image ? <img
                  src={image}
                  alt="dr-image"
                  className="w-20 rounded-2xl"
                /> : <InitialName firstName={firstName} lastName={lastName} bgAndTextStyle="bg-[#E0F2F4] text-[#0B6B78] size-10 rounded-lg"/> }
                
                <div className="flex flex-col items-center gap-1">
                  <p>
                    {speciality && "Dr. "}{firstName} {lastName}
                  </p>
                  <p>{speciality && speciality}</p>
                </div>
              </div>
              <div className=" text-sm inline-flex items-center justify-center shrink-0 p-1  w-full md:w-1/2">
                <div
                  className={`rounded-full border p-1 text-center w-full md:w-1/2 ${style}`}
                >
                  {" "}
                  {status === "accepted" && <p>À venir</p>}
                  {status === "rejected" && <p>Annulé</p>}
                  {status === "cancelled" && <p>Terminé</p>}
                  {status === "pending" && <p>En attente</p>}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3 py-2 md:py-4">
              <p>Date</p>
              <p className="justify-start flex w-1/2">{date}</p>
            </div>
            <div className="flex justify-between items-center gap-3 py-2 md:py-4">
              <p>Heure</p>
              <p className="justify-start flex w-1/2">{heure}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-2 md:py-4">
              <p>Adresse</p>
              <p className="justify-start flex w-1/2">{lieu}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-2 md:py-4">
              <p>Motif</p>
              <p className="justify-start flex w-1/2">{motif}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-2 md:py-4">
              <p>Référence</p>
              <p className="justify-start flex w-1/2">RV-00{id}</p>
            </div>
            <button
              className="text-white bg-[#0B6B78] p-1 rounded-lg w-full"
              onClick={()=>viewDetail(id)}
            >
              Fermer
            </button>
          </div>
        </div>
  )
}

export default DetailOneRv
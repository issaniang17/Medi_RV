import { Check, CircleCheckBig, Eye, X } from "lucide-react";
import InitialName from "../initialName";
import { statusStyle } from "../../constante";

type cardProps = {
  lastName: string;
  firstName: string;
  motif: string;
  id: number;
  heure: string;
  date: string;
  status: string;
  actionStyle?: string;
  accepter: (id: number) => void;
  refuser: (id: number) => void;
  terminer: (id: number) => void;
  voirDetails: (id: number) => void;
  accepted?: boolean;
  pending?: boolean;
  generalCard?: boolean;
  width?: string;
};
const DoctorRvCard = ({
  accepter,
  date,
  firstName,
  heure,
  id,
  lastName,
  motif,
  refuser,
  status,
  terminer,
  voirDetails,
  accepted,
  pending,
  generalCard,
  width,
}: cardProps) => {
  const acceptedStatus =
    "rounded-full py-1 gap-1 flex justify-center items-center text-[#007A55] bg-[#ECFDF5] border border-[#007A55] text-sm px-3";
  return (
    <div
      className={`flex items-center py-6 px-4 rounded-2xl bg-white shrink-0 shadow-sm/40 ${width}`}
    >
      {accepted && (
        <div className="flex justify-between w-full items-center px-4">
          <div className="flex items-center gap-6">
            <div className="text-[#0B6B78] flex flex-col items-center">
              <p className="font-bold">{heure}</p>
              <p className="text-sm">{date}</p>
            </div>
            <div>
              <InitialName
                bgAndTextStyle="bg-[#E0F2F4] text-[#0B6B78] size-10 rounded-lg"
                firstName={firstName}
                lastName={lastName}
              />
            </div>
            <div>
              <p className="font-semibold text-lg">
                {firstName} {lastName}
              </p>
              <p className="text-gray-500 text-sm">{motif}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className={acceptedStatus}>
              <div className="size-2 rounded-full bg-[#007A55]"></div>
              <p>Accepté</p>
            </div>
            <Eye
              onClick={() => voirDetails(id)}
              size={15}
              className="text-[#0B6B78] cursor-pointer"
            />
          </div>
        </div>
      )}
      {pending && (
        <div className="flex flex-col gap-3  w-full">
          <div className="flex items-center gap-3">
            <div>
              <InitialName
                bgAndTextStyle="bg-[#E0F2F4] text-[#0B6B78]  rounded-lg size-10"
                firstName={firstName}
                lastName={lastName}
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">
                {firstName} {lastName}
              </p>
              <div className="flex gap-1 text-gray-500 text-sm">
                <p>{date}</p>
                <p>{heure}</p>
              </div>
              <p className="text-gray-500 text-sm">{motif}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div
              className="flex justify-center items-center gap-2 w-1/2 rounded-lg p-2 bg-[#76ffbf] text-[#007A55] border-[#007A55]"
              onClick={() => accepter(id)}
            >
              <Check size={15} />
              <p>Accepter</p>
            </div>
            <div
              className="flex justify-center items-center gap-2 w-1/2 rounded-lg p-2 bg-[#fdb2b2] text-[#C9342C]"
              onClick={() => refuser(id)}
            >
              <X size={15} />
              <p>Refuser</p>
            </div>
          </div>
        </div>
      )}
      {generalCard && (
        <div className="grid grid-cols-5 gap-3 w-full px-4 md:px-6">
          <div className="flex items-center gap-2">
            <InitialName
              bgAndTextStyle="bg-[#E0F2F4] text-[#0B6B78] rounded-lg size-10"
              firstName={firstName}
              lastName={lastName}
            />
            <div>
              <p className="font-semibold text-lg">
                {firstName} {lastName}
              </p>
              <p className="text-sm text-gray-500">RDV-00{id}</p>
            </div>
          </div>

          <div>
            <p className="font-semibold">{date}</p>
            <p className="text-gray-500 text-sm">{motif}</p>
          </div>
          <div className="text-[#0B6B78] font-semibold text-sm">{heure}</div>
          <div>
            {status === "accepted" && <p className={`${statusStyle.filter(item => item.status === status)[0].style} rounded-full py-1 px-2 inline-flex justify-center items-center`}>Accepté</p>}
            {status === "pending" && <p className={`${statusStyle.filter(item => item.status === status)[0].style} rounded-full py-1 px-2 inline-flex justify-center items-center`}>En attente</p>}
            {status === "rejected" && <p className={`${statusStyle.filter(item => item.status === status)[0].style} rounded-full py-1 px-2 inline-flex justify-center items-center`}>Refusé</p>}
            {status === "cancelled" && <p className={`${statusStyle.filter(item => item.status === status)[0].style} rounded-full py-1 px-2 inline-flex justify-center items-center`}>Terminé</p>}
          </div>

          <div className="flex gap-2 items-center">
            <Eye onClick={() => voirDetails(id)} className="text-[#0B6B78] cursor-pointer" />{" "}
            <span>Voir</span>
            {status === "accepted" && (
              <div
                className={`bg-[#E0F2F4] text-[#0B6B78] px-2 py-1 rounded-lg flex justify-center items-center gap-2 cursor-pointer`}
                onClick={() => terminer(id)}
              >
                <CircleCheckBig />
                <span>Teminer</span>
              </div>
            )}
            {status === "pending" && (
              <div className="flex items-center  gap-2">
                <div
                  className="flex justify-center items-center gap-1  rounded-lg p-2 bg-[#ECFDF5] text-[#007A55] border-[#007A55] border cursor-pointer"
                  onClick={() => accepter(id)}
                >
                  <Check size={15} />
                  <p>Accepter</p>
                </div>
                <div
                  className="flex justify-center items-center gap-1 rounded-lg p-2 bg-[#FCF4F4] text-[#C9342C] border-[#C9342C] border cursor-pointer"
                  onClick={() => refuser(id)}
                >
                  <X size={15} />
                  <p>Refuser</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorRvCard;

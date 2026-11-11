import { Calendar, MapPin } from "lucide-react";
import LinkBtn from "./linkBtn";

export type doctorProps = {
  id: number;
  nom: string;
  prenom: string;
  specialite: string;
  adresse: string;
  prix: string;
  disponibilite: string;
  link?: boolean;
  size?:string
};

const DoctorCard = ({
  adresse,
  nom,
  prenom,
  specialite,
  disponibilite,
  prix,
  id,
  link,
  size
}: doctorProps) => {
  return (
    <div
      className={`flex my-5 flex-col gap-5 rounded-2xl shadow-sm px-4 py-6 divide-y divide-gray-300 hover:border hover:border-[#0B6B78] cursor-pointer duration-150 transition-all leading-loose ${size}`}
      key={id}
    >
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-3">
          <div className="rounded-lg flex justify-center items-center font-bold text-lg bg-[#E0F2F4] p-3 size-15 text-[#0B6B78]">
            {prenom.split("")[0].toUpperCase()} {nom.split("")[0].toUpperCase()}
          </div>
          <div className="space-y-1">
            <h3>
              Dr. {prenom} {nom}
            </h3>
            <p className="text-[#29997B]">{specialite}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 font-light">
          <MapPin size={14} />
          <p>{adresse}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[#29997B] space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-[#29997B]"></div>
            <p>{disponibilite}</p>
          </div>
          <p className="text-gray-500">{prix} FCFA</p>
        </div>
        {link && (
          <LinkBtn
            icon={<Calendar />}
            name="Réserver"
            url="/appointments"
            style="bg-[#0B6B78] w-30 hover:bg-[#29997B]"
          />
        )}
      </div>
    </div>
  );
};

export default DoctorCard;

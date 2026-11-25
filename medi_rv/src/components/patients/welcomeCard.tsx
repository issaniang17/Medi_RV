import { type LucideIcon } from "lucide-react";
import LinkBtn from "../linkBtn";

type cardProps = {
  name: string;
  bgColor: string;
  urlIcon: LucideIcon;
  urlName: string;
  url: string;
  statPending?:number;
  statAccepted?:number;
  pendingWord?: string;
  acceptedgWord?: string
};
const WelcomeCard = ({ name, bgColor, urlIcon, urlName, url,statAccepted, statPending, acceptedgWord,pendingWord  }: cardProps) => {
  const hours = new Date().getHours();
  const Icon = urlIcon;
  return (
    <div
      className={`flex flex-col space-y-4 md:flex-row md:justify-between md:items-center py-6 px-4  rounded-2xl w-full ${bgColor}`}
    >
      <div className="space-y-2">
        <div className="flex gap-1">
          <p>
            {hours >= 12
              ? hours >= 16
                ? "Bonsoir"
                : "Bon aprés-midi"
              : "Bonjour"}
            ,
          </p>
          <p className="capitalize font-bold">{name}</p>
        </div>
        <div className="flex gap-1 flex-wrap">
            {statAccepted && <p className="font-normal text-gray-200">
            Vous avez{" "}
            <span className="text-white font-bold">{statAccepted} {acceptedgWord}</span> à venir
          </p>}
          {statPending && <p className="font-normal text-gray-200">
           et{" "}
            <span className="text-white font-bold">{statPending} {pendingWord}</span> à venir.
          </p>}
          
        </div>
      </div>
      <div>
        <LinkBtn
          icon={<Icon />}
          name={urlName}
          url={url}
          style="bg-[#E07B39] w-full"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;

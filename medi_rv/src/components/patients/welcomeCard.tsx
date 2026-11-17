import { CalendarDays } from "lucide-react";
import LinkBtn from "../linkBtn";

type cardProps = { name: string };
const WelcomeCard = ({ name }: cardProps) => {
  const hours = new Date().getHours();

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center py-6 px-4 bg-linear-to-r from-[#0B6370] to-[#0D343C] rounded-2xl w-full">
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
          <p className="capitalize">{name}</p>
        </div>
        <div>
          <p className="font-normal text-gray-200">
            Vous avez{" "}
            <span className="text-white font-bold">2 rendez-vous</span> à venir.
          </p>
        </div>
      </div>
      <div>
        <LinkBtn
          icon={<CalendarDays />}
          name="Prendre rendez-vous"
          url="/auth/me/appointments"
          style="bg-[#E07B39] w-full"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;

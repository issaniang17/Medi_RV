import type { LucideIcon } from "lucide-react/types";

type card = {
  icon: LucideIcon;
  title: string;
  stats: number;
  styleIcon: string;
  positionParagraphe?: string;
  cardStyle?: string;
  drCard?: boolean;
  drCardTitle?: string;
  percent?:boolean
};
const CardRv = ({
  icon,
  stats,
  title,
  styleIcon,
  positionParagraphe,
  cardStyle,
  drCard,
  drCardTitle,
  percent
}: card) => {
  const Icon = icon;
  return (
    <div
      className={`shadow-sm/40 py-5 px-4 md:px-8 justify-between flex items-center rounded-2xl relative ${cardStyle}`}
    >
      <div className={positionParagraphe}>
        <p className="text-gray-500">{title}</p>
        <p className="font-bold text-2xl">{stats}{percent && '%'}</p>
      </div>
      <div className={`${styleIcon} p-2 rounded-lg`}>{<Icon />}</div>
      {drCard && <div className="absolute top-2 right-3 text-black text-sm opacity-80">{drCardTitle}</div>}
    </div>
  );
};

export default CardRv;

import type { LucideIcon } from "lucide-react/types"

type card = {
    icon:LucideIcon,
    title:string,
    stats:number,
    styleIcon:string,
    positionParagraphe?:string
    cardStyle?:string
}
const CardRv = ({icon, stats, title, styleIcon, positionParagraphe, cardStyle}:card) => {
    const Icon = icon
  return (
    <div className={`shadow-sm/40 py-5 px-4 md:px-8 justify-between flex items-center rounded-2xl ${cardStyle}`}>
        <div className={positionParagraphe}>
            <p className="text-gray-500">{title}</p>
            <p className="font-bold text-2xl">{stats}</p>
        </div>
        <div className={`${styleIcon} p-2 rounded-2xl`}>
            {<Icon/>}
        </div>
    </div>
  )
}

export default CardRv
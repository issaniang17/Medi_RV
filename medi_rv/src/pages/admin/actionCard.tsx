import { ChevronRight, type LucideIcon } from "lucide-react";
type actionProps = {
    icon:LucideIcon,
    title:string,
    view:()=>void,
    
}
const ActionCard = ({icon, title,view}:actionProps) => {
    const Icon = icon
  return (
    <div className="rounded-2xl p-2 flex justify-between items-center border border-[#E0F2F4] hover:bg-[#0b6b7818] transition-colors duration-150 ease-in hover:text-[#0B6B78] hover:border-[#0B6B78] bg-white" onClick={()=>view()}>
      <div className="flex items-center gap-3" >
                    
                    <div className="p-2 rounded-lg items-center justify-center flex bg-[#E0F2F4] text-[#0B6B78]">
                        {<Icon/>}
                    </div>
                    <div>
                        <p className="font-bold">{title}</p>
                        
                    </div>
                </div>
      <div className="text-gray-500">{<ChevronRight />}</div>
    </div>
  );
};

export default ActionCard;

import { PencilLine, Plus, Trash } from "lucide-react";
import { useState } from "react";

type dispoProps = {
  day: string;
  availability?: {
    id: number;
    start: string;
    end: string;
  }[];
  id: number;
  updateCrenau: (id: number, dispoId:number) => void;
  deleteCrenea: (id: number,  dispoId:number) => void;
  addCreneau: (id:number) => void;
};
const DisponibilityCard = ({
  addCreneau,
  day,
  id,
  deleteCrenea,
  availability,
  updateCrenau,
}: dispoProps) => {
  const [viewAction, setViewAction] = useState(false);

  return (
    <div className="rounded-2xl p-3 flex flex-col gap-3 shadow-sm/30 relative bg-white justify-between">
      <div className="flex flex-col gap-3">
        <div className="font-semibold">
          <h2>{day}</h2>
        </div>
        <div className="flex justify-center items-center">
          { availability && availability?.length !== 0 ? (
            <div className="flex flex-col gap-3 w-full">
              {availability?.map((item) => (
                <div
                  className="rounded-2xl bg-[#E0F2F4] text-[#0B6B78] p-2 relative w-full"
                  onMouseOver={() => setViewAction(true)}
                  onMouseOut={() => setViewAction(false)}
                  
                  key={item.id}
                >
                  <p className="font-semibold">
                    {item.start} - {item.end}
                  </p>
                  <p className="text-sm font-light">Disponible</p>
                  {viewAction && (
                    <div className="absolute w-15 shadow-sm -top-2 -right-2 bg-white rounded-lg flex  items-center p-1">
                      <div className="w-1/2 p-1 rounded-lg hover:bg-[#0b6b78b1] flex justify-center items-center">
                        <PencilLine
                          onClick={() => updateCrenau(id, item.id)}
                          size={14}
                        />
                      </div>
                      <div className="w-1/2 p-1 rounded-lg hover:text-red-500 hover:bg-red-100 flex justify-center items-center">
                        <Trash onClick={() => deleteCrenea(id, item.id)} size={14} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="italic text-gray-500">Indisponible</div>
          )}
        </div>
      </div>
      <div
        className="p-2 rounded-2xl flex justify-center items-center border-dashed border border-gray-500 text-gray-500 "
        onClick={()=>addCreneau(id)}
      >
        <Plus />
      </div>
    </div>
  );
};

export default DisponibilityCard;

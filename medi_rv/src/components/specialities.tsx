import { specialities } from "../constante";
import InfoCadre from "./info_cadre";

const Specialities = () => {
  return (
    <div className="py-10 px-8 bg-[#F4F7F9] flex flex-col gap-5">
      <InfoCadre width="w-50" info="Spécialités disponibles"/>
      
      <div className="my-5 flex flex-col gap-4 md:justify-between md:flex-row">
        <p className="text-black font-bold text-3xl">Trouvez le spécialiste qu'il vous faut</p>
        
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {
            specialities.map((item, index)=>(
                <div key={index} className={`flex flex-col justify-center items-center gap-3 space-y-2 hover:text-[#68A6AE] rounded-2xl px-3 py-5 hover:border hover:border-[#0B6B78] shadow-sm transition-all duration-200 ease-in cursor-pointer text-black bg-white`}>
                    <p className={`inline-flex items-center justify-center p-2 rounded-lg duration-250 ease-in  ${item.iconStyle}`}>{<item.icon/>}</p>
                    <p>{item.speciality}</p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Specialities;

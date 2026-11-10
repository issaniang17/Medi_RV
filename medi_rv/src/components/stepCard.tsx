import type { stepProps } from "../types/comment_marche";

const StepCard = ({ icon, step, text, title }: stepProps) => {
    const Icon = icon
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center space-y-3">
      <div className="bg-[#0B6B78] p-4 flex justify-center items-center text-white relative rounded-2xl my-2">
        <Icon/>
        <div className="absolute -top-3 -right-2 rounded-full text-white font-bold p-1 bg-[#E17100] size-6 flex justify-center items-center">
          {step}
        </div>
      </div>
      <div className="my-3 space-y-2">
        <p>ÉTAPE 0{step}</p>
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default StepCard;

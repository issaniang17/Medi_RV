import { Play } from "lucide-react"
import InfoCadre from "./info_cadre"
import StepCard from "./stepCard"
import { step } from "../constante"

const CommentMarche = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3 space-y-2 bg-white py-10 px-8 text-black" id="comment-marche">
        <InfoCadre info="Simple et rapide" style="text-sm font-semibold" icon={<Play size={12} strokeWidth={3}/>}/>
        <div className="space-y-3">
            <h2 className="font-bold text-3xl">Comment ça marche ?</h2>
            <p className="text-gray-500 text-lg tracking-tight">Prenez rendez-vous avec un professionnel de santé en 3 étapes simples, <br /> depuis votre téléphone ou votre ordinateur.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
            {
                step.map((item,index)=>(
                    <StepCard key={index} icon={item.icon} step={item.step} text={item.text} title={item.title}/>
                ))
            }
        </div>
    </div>
  )
}

export default CommentMarche
import { ArrowRight, Calendar, Shield } from "lucide-react"
import InfoCadre from "./info_cadre"
import LinkBtn from "./linkBtn"
import { supportClient } from "../constante"

const Join = () => {
  return (
    <div className="flex justify-center items-center bg-white py-10">
    <div className='flex flex-col gap-5 justify-center text-center items-center py-5 px-3 md:py-10  bg-linear-to-b from-[#0B6370] to-[#0D343C] w-[90%] rounded-2xl'>
        <InfoCadre info="Gratuit pour les patients" icon={<Shield size={14} />} width="w-60" style="text-white border-white border"/>
        <div className="font-bold text-2xl">
            <p>Votre santé mérite les meilleurs soins.</p>
            <p className="text-[#3BAA9E]">Commencez aujourd'hui.</p>
        </div>
        <div className="opacity-70 text-lg">
            <p>Rejoignez plus de 12 000 patients qui font confiance à MediRDV pour gérer <br /> leur santé simplement, depuis Dakar ou n'importe où au Sénégal.</p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
            <LinkBtn icon={<Calendar/>} name="Prendre rendez-vous gratuitement" url="/appointments" key={'rendez-vous'} style="bg-[#E07B39]"/>
            <LinkBtn icon={<ArrowRight/>} name="Vous êtes médecin? Rejoignez-nous " url="/doctor-applications" key={'devenir-medecin'} style="bg-[#255B63] flex-row-reverse"/>
        </div>
        <div className="my-4 border-t  grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
            {supportClient.map((item, index)=>(
                <div className="flex items-center gap-2" key={index}>
                    {<item.icon className="text-[#3BAA9E]"/>}
                    <p className="opacity-70">{item.info}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Join
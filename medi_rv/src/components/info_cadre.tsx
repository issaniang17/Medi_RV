import type { JSX } from "react/jsx-runtime"


type infoProps = {
    icon?:JSX.Element,
    info:string,
    style?:string,
    width:string
}

const InfoCadre = ({info, icon, style, width}:infoProps) => {
  return (
    <div className={`rounded-full p-1 flex gap-2 items-center justify-center relative ${width} text-[#0B6B78] ${style}`}>
        <div className="w-full absolute top-0 left-0 h-full rounded-full bg-[#0B6B78] opacity-15"></div>
        {icon ? <div>{icon}</div> : <div className="bg-[#0B6B78] w-2 h-2 rounded-full"></div>}
        
        <p>{info}</p>
      </div>
  )
}

export default InfoCadre
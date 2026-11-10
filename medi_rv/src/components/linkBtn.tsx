import { Link } from "react-router-dom"
import type { JSX } from "react/jsx-runtime"

type btnProps ={
    icon:JSX.Element,
    name:string,
    url:string,
    style:string,
    
}

const LinkBtn = ({icon, name, url, style}:btnProps) => {
  return (
    <Link to={url} className={`${style} inline-flex justify-center items-center gap-2 text-white font-semibold rounded-lg p-3 duration-200 ease-in transition-colors`}>
        <p>{icon}</p>
        <p>{name}</p>
    </Link>
  )
}

export default LinkBtn
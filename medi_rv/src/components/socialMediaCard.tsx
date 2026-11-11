
import type { IconType } from "react-icons"
import { Link } from "react-router-dom"

export type socialCardProps = {
    icon:IconType,
    url:string
}

const SocialMediaCard = ({icon, url}:socialCardProps) => {
    const Icon = icon
  return (
    <Link to={url} key={url} className="p-2 rounded-lg duration-150 transition-colors bg-[#1A3A40] hover:bg-[#3BAA9E]">
        {<Icon/>}
    </Link>
  )
}

export default SocialMediaCard
import { ChevronRight } from "lucide-react"
import { adminRapidAction } from "../../constante"
import { Link } from "react-router-dom"

const ActionRapide = () => {
  return (
    <div className='flex flex-col  gap-4 rounded-2xl shadow-sm/30 bg-white px-4 py-6 md:px-8 md:py-8 mx-4 my-8 leading-loose'>
        <div className="font-bold text-2xl">
            <h2>Actions rapides</h2>
        </div>
        <div className="grid gap-3 px-2">
            {adminRapidAction.map((item, index)=>(

            <Link to={item.url} className="rounded-2xl p-2 flex justify-between items-center border border-[#E0F2F4] hover:bg-[#0b6b7818] transition-colors duration-150 ease-in hover:text-[#0B6B78] hover:border-[#0B6B78]" key={index}>
                <div className="flex items-center gap-3">
                    
                    <div className="p-2 rounded-lg items-center justify-center flex bg-[#E0F2F4] text-[#0B6B78]">
                        {<item.icon/>}
                    </div>
                    <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                </div>
                <div className="text-gray-500">
                    {<ChevronRight/>}
                </div>
            </Link>
            ))}
        </div>
    </div>
  )
}

export default ActionRapide
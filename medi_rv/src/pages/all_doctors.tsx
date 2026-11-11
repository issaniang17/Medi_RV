import { Link } from "react-router-dom"
import DoctorCard from "../components/doctorCard"
import { previewDoctorsExample } from "../constante"

const AllDoctors = () => {
    
  return (
    <div className="mt-20 text-black px-10">
        <div className="grid md:grid-cols-3 gap-5">
                {previewDoctorsExample.map((item) => (
                    <Link to={`/doctors/${item.id}`} key={item.id}>
                    <DoctorCard
                    adresse={item.adresse}
                    disponibilite={item.disponibilite}
                    nom={item.nom}
                    prenom={item.prenom}
                    prix={item.prix}
                    specialite={item.specialite}
                    id={item.id}
                  /></Link>
                  
                ))}
              </div>
    </div>
  )
}

export default AllDoctors
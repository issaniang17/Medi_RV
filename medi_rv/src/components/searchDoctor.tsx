import { MapPin, Search, Stethoscope } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Doctor } from "../types/doctor";
import axios from "axios";

const SearchDoctor = () => {
  const [erreur, setErreur] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Doctor | null>(null);
  const [doctorSpeciality, setDoctorSpeciality] = useState("");
  const [ville, setVille] = useState("");
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!doctorSpeciality && !ville) {
      return toast.error("Veiller remplir un champs au moins.");
    }
    if (doctorSpeciality && ville) {
      const getDoctor = async () => {
        try {
          setLoading(true);
          setErreur(null);
          const response = await axios.get("api/doctors/filters", {
            params: {
              speciality: doctorSpeciality,
              address: ville
            },
          });
          setResult(response.data);
          console.log(result)
        } catch (error) {
          if(axios.isAxiosError(error)){
            setErreur(error.message)
          }
        }finally{
          setLoading(false)
        }
      };
      return getDoctor();
    }
    if(doctorSpeciality || ville){
      const getDoctor = async ()=>{
        try {
          setLoading(true);
          setErreur(null);
          const response = await axios.get("api/doctors/filters", {
            params: {
              speciality: doctorSpeciality || undefined,
              address: ville || undefined
            },
          });
          setResult(response.data);
          console.log(result)
        } catch (error) {
          if(axios.isAxiosError(error)){
            setErreur(error.message)
          }
        }finally{
          setLoading(false)
        }
      }
      return getDoctor()
    }
  };
  if (loading) {
    return <div>loading...</div>;
  }
  if (erreur) {
    return <div>{erreur}</div>;
  }
  return (
    <form
      className="mt-8 flex flex-col md:flex-row md:justify-between  gap-3 justify-center  bg-white rounded-lg md:rounded-2xl px-3 py-4 font-light"
      onSubmit={handleSubmit}
    >
      <div className="md:divide-x md:space-x-3 divide-[#4a8e9863] flex flex-col md:flex-row gap-2 w-full md:w-[75%] md:justify-between ">
        <div className="flex gap-2 items-center  md:w-1/2">
          <Stethoscope color="#0B6370" />
          <input
            type="text"
            placeholder="Spécialité du médecin"
            value={doctorSpeciality}
            className="w-[90%] outline-0 text-black "
            onChange={(e) =>
              setDoctorSpeciality(e.target.value.trim().toLowerCase())
            }
          />
        </div>

        <div className="flex gap-2 items-center  md:w-1/2">
          <MapPin color="#0B6370" />
          <input
            type="text"
            placeholder="Ville"
            value={ville}
            className="w-[90%] outline-0 text-black"
            onChange={(e) => setVille(e.target.value.trim().toLowerCase())}
          />
        </div>
      </div>
      <button className="inline-flex gap-2 p-2 justify-center items-center rounded-lg w-full bg-[#044d5a] hover:bg-[#0B6370] md:w-1/4">
        <Search />
        Rechercher
      </button>
    </form>
  );
};

export default SearchDoctor;

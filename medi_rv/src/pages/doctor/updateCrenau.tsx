import { Save, X } from "lucide-react";
import { dayofWeek, heureDisponible } from "../../constante";
import { useState } from "react";
import type { doctorCreneau } from "../../types/crenauxDoctor";

type creneauProps = {
  view: () => void;
  updateHeure: doctorCreneau;
};
const UpdateCreneau = ({ view, updateHeure }: creneauProps) => {
  const [creneauVAlue, setCreneauValue] = useState<doctorCreneau>(updateHeure);
  console.log(creneauVAlue)
  const [heureDebut, setHeureDebut] = useState(
    updateHeure.availability?.slice(0)[0].start || '',
  );
  const [heureFin, setHeureFin] = useState(
    updateHeure.availability?.slice(0)[0].end || '',
  );
  const idHeure = updateHeure.availability?.slice(0)[0].id || 1;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setCreneauValue((prev) => ({
      ...prev,

      [name]: value,
    }));
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCreneauValue({
      ...creneauVAlue,
      availability: [
        {
          id: idHeure ?? 0,
          start: heureDebut ?? "",
          end: heureFin ?? "",
        },
      ],
    });
    view();
  };
  // console.log(creneauVAlue);
  return (
    <div className="flex justify-center items-center gap-3 px-4 fixed z-300 h-screen top-0 left-0 w-full backdrop-blur-sm py-2 md:py-10">
      <div className="w-full md:w-[50%] leading-relaxed flex flex-col justify-around  bg-white h-full shadow-sm/50 rounded-2xl my-5 px-8  divide-y divide-gray-300">
        <div className="flex justify-between items-center px-4 py-2">
          <div>
            <h2>Modifier la disponibilité</h2>
          </div>
          <div onClick={view} className="p-1 rounded-2xl bg-gray-300">
            <X />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col gap-5 justify-evenly"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="text-sm text-gray-600 font-semibold">
              Jour de consultation
            </h2>
            <select
              name="day"
              id="day"
              defaultValue={creneauVAlue.day}
              onChange={handleChange}
              className="bg-gray-300 rounded-lg p-2"
            >
              {dayofWeek.map((day) => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between gap-3">
            <div className="flex flex-col space-y-4 w-1/2">
              <h3 className="text-sm text-gray-600 font-semibold">
                Heure de début
              </h3>
              <select
                name="start"
                id="start"
                defaultValue={
                  creneauVAlue.availability?.slice(0)[0].start ?? "08:00"
                }
                onChange={(e) => setHeureDebut(e.target.value)}
                className="bg-gray-300 rounded-lg p-2"
              >
                {heureDisponible.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col space-y-4 w-1/2">
              <h3 className="text-sm text-gray-600 font-semibold">
                Heure de fin
              </h3>
              <select
                name="end"
                id="end"
                defaultValue={
                  creneauVAlue.availability?.slice(0)[0].end ?? "08:30"
                }
                onChange={(e) => setHeureFin(e.target.value)}
                className="bg-gray-300 rounded-lg p-2"
              >
                {heureDisponible.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end items-center gap-2">
            <div onClick={view} className="cursor-pointer">
              <p>Annuler</p>
            </div>
            <button className="inline-flex gap-2 items-center justify-center text-white font-semibold rounded-lg p-1 bg-[#0B6B78]">
              <Save />
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCreneau;

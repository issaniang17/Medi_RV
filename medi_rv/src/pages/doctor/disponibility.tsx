import { useState } from "react";
import { doctorCreneaux } from "../../constante";
import DisponibilityCard from "./disponibilityCard";
import type { doctorCreneau } from "../../types/crenauxDoctor";
import UpdateCreneau from "./updateCrenau";
import AddCreneau from "./addCreneau";

const Disponibility = () => {
  const [creneau, setCreneau] = useState<doctorCreneau[]>(doctorCreneaux);
  const [updateCreneau, setUpdateCreneau] = useState(false);
   const [addCreneau, setAddCreneau] = useState(false);
  const [oneCreneau, setOneCreneau] = useState<doctorCreneau>({
    day: "",
    id: 0,
    availability: [],
  });

  const handleViewCard = () => {
    setUpdateCreneau(!updateCreneau);
    if (!updateCreneau) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
    const handleViewAddCard = () => {
    setAddCreneau(!addCreneau);
    if (!addCreneau) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const handleDelete = (id: number, dispoId: number) => {
    const oneCreneau = creneau.find((item) => item.id === id);
    if (!oneCreneau) {
      return null;
    }
    console.log();
    const filterHeure = oneCreneau.availability?.filter(
      (item) => item.id !== dispoId,
    );
    const update = { ...oneCreneau, availability: filterHeure };
    setCreneau(creneau.map((prev) => (prev.id === id ? update : prev)));
  };

  const handleAdd = (id: number) => {
    const existeCreneau = creneau.find((item) => item.id === id);
    if (!existeCreneau) {
      return null;
    }
    setOneCreneau(existeCreneau);
    handleViewAddCard();
  };

  const handleUpdate = (id: number, dispoId: number) => {
    const update = creneau.find((item) => item.id === id);
    if (!update) {
      return null;
    }
    const heure = update.availability?.filter((item) => item.id === dispoId);
    const newDate = { ...update, availability: heure };
    setOneCreneau(newDate);
    handleViewAddCard();
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl md:text-3xl">Mes disponibilités</h2>
        <p className="text-sm text-gray-500">
          Ajoutez et ajustez vos plages de consultation pour cette semaine.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {creneau.map((item) => (
          <DisponibilityCard
            addCreneau={handleAdd}
            day={item.day}
            deleteCrenea={handleDelete}
            id={item.id}
            availability={item.availability}
            updateCrenau={handleUpdate}
            key={item.id}
          />
        ))}
      </div>
      {updateCreneau && (
        <UpdateCreneau updateHeure={oneCreneau} view={handleViewCard} />
      )}
      {addCreneau && (
        <AddCreneau addCreneau={oneCreneau} view={handleViewAddCard} />
      )}
    </div>
  );
};

export default Disponibility;

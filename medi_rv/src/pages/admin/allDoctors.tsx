import { useState } from "react";
import { statusStyle, users } from "../../constante";
import {
  Eye,
  Funnel,
  RefreshCcw,
  Search,
  Stethoscope,
  UserCheck,
  UserX,
  X,
} from "lucide-react";
import { type cardAdminProps } from "../../types/cardAdmin";
import InitialName from "../../components/initialName";
import { Link } from "react-router-dom";

const AllAdminDoctor = () => {
  const doctorUsers = users.filter((item) => item.role === "medecin");
  const [allUser, setAllUser] = useState(doctorUsers);
  const [search, setSearch] = useState("");
  const [oneUserDetail, setOneUserDetail] = useState<cardAdminProps>({
    email: "",
    firstName: "",
    id: 0,
    lastName: "",
    role: "",
    statut: "",
  });
  const [viewDetail, setViewDetail] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (!value) {
      setAllUser(doctorUsers);
    } else {
      const pattern = [...doctorUsers];
      setAllUser(
        pattern.filter(
          (item) =>
            item.firstName
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            item.email.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      );
    }
  };
  const handleFilter = (statut: string) => {
    const allInOne = [...doctorUsers];
    const oneCategory =
      statut !== "all"
        ? allInOne.filter((item) => item.statut === statut)
        : allInOne;
    setAllUser(oneCategory);
  };
  const handleView = () => {
    setViewDetail(!viewDetail);
  };
  const viewDetailUser = (id: number) => {
    const oneUser = allUser.find((item) => item.id === id);
    if (!oneUser) {
      return null;
    }
    setOneUserDetail(oneUser);
    setViewDetail(true);
  };
  const handleActionStatut = (id: number, statut: string) => {
    const oneUser = allUser.find((item) => item.id === id);
    if (!oneUser) {
      return null;
    }
    const update = { ...oneUser, statut };
    setOneUserDetail(update);
    setAllUser(allUser.map((item) => (item.id === id ? update : item)));
  };

  return (
    <div className="flex flex-col gap-5 py-8 px-6 md:px-8 md:py-10">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-2xl">Professionels de santé</h2>
          <p className="text-gray-500">
            {allUser.length !== 0 &&
              `${allUser.filter((item) => item.statut === "pending").length} profils nécessitent une validation`}{" "}
          </p>
        </div>
        <Link
          to={"/admin/setting"}
          className="rounded-2xl bg-[#0B6B78] text-white flex items-center gap-2 justify-center p-3 hover:opacity-90 transition-colors duration-150 ease-in"
        >
          <Stethoscope />
          <p>Ajouter un médecin</p>
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex gap-2 items-center p-2 bg-white rounded-xl md:w-1/2">
          <Search size={15} className="text-gray-500" />
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={handleSearch}
            placeholder="Rechercher par medecin ou specialite"
            className="outline-0 flex-1"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 p-2 rounded-lg border border-gray-300">
            <Funnel className="text-gray-500" />
            <select
              name="statut"
              id="statut"
              defaultValue={"all"}
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="all">Tous les statuts</option>
              <option value="approved">Actif</option>
              <option value="pending">A valider</option>
              <option value="rejected">Suspendu</option>
            </select>
          </div>
          <div
            className="p-2 rounded-lg border border-gray-300"
            onClick={() => handleFilter("all")}
          >
            <RefreshCcw />
          </div>
        </div>
      </div>
      <div>
        <table className="bg-white leading-loose shadow-sm/30 rounded-2xl overflow-x-scroll flex flex-col">
          <thead>
            <tr className=" grid grid-cols-4 gap-3 py-4 bg-gray-200 rounded-t-2xl w-300 md:w-full">
              <th>Nom </th>
              <th>Specialite</th>

              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((item) => (
              <tr
                key={item.id}
                className="grid-cols-4 grid  gap-3 py-4 rounded-t-2xl w-300 md:w-full"
              >
                <td className="flex items-center gap-2 justify-center">
                  <InitialName
                    firstName={item.firstName}
                    bgAndTextStyle="text-[#0B6B78] bg-[#E0F2F4] rounded-lg"
                    lastName={item.lastName}
                  />
                  <div>
                    <p className="font-semibold">
                      Dr {item.firstName} {item.lastName}
                    </p>
                    <p className="text-sm text-gray-400 font-light">
                      {item.email}
                    </p>
                  </div>
                </td>

                <td
                  className={`p-1 flex flex-col justify-center items-center rounded-lg capitalize`}
                >
                  <p className="font-semibold"> {item.speciality}</p>
                  <p className="font-light text-sm"> {item.location}</p>
                </td>
                <td className="flex justify-center items-center">
                  {item.statut === "approved" && (
                    <p
                      className={`${statusStyle[0].style} rounded-full w-1/2 text-center`}
                    >
                      Actif
                    </p>
                  )}{" "}
                  {item.statut === "rejected" && (
                    <p
                      className={`${statusStyle[1].style} rounded-full w-1/2 text-center`}
                    >
                      Suspendu
                    </p>
                  )}{" "}
                  {item.statut === "pending" && (
                    <p
                      className={`${statusStyle[3].style} rounded-full w-1/2 text-center`}
                    >
                      En attente
                    </p>
                  )}
                </td>
                <td className="flex items-center gap-2 justify-center">
                  <div
                    className="flex items-center gap-1 text-[#0B6B78] font-semibold cursor-pointer"
                    onClick={() => viewDetailUser(item.id)}
                  >
                    <Eye size={15} />
                    <p>Voir</p>
                  </div>
                  {["pending", "approved"].includes(item.statut) && (
                    <div
                      className="flex items-center gap-2 p-1 rounded-lg bg-[#FEF2F2] text-[#CB3D36] font-semibold text-sm border border-[#cb3d36a5] cursor-pointer"
                      onClick={() => handleActionStatut(item.id, "rejected")}
                    >
                      <UserX size={15} />
                      <p>Suspendre</p>
                    </div>
                  )}
                  {item.statut === "rejected" && (
                    <div
                      className=" flex gap-2 items-center justify-center p-1 rounded-lg bg-[#ECFDF5] text-[#007A55] border border-[#007A55] text-sm cursor-pointer"
                      onClick={() => handleActionStatut(item.id, "approved")}
                    >
                      <UserCheck size={15} />
                      <p>Activer</p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {viewDetail && (
          <div className="my-6 flex flex-col divide-y divide-gray-200 bg-white px-6 py-8 leading-loose rounded-2xl shad-sm/35">
            <div className="flex justify-between items-center py-4">
              <div className="flex flex-col justify-evenly gap-4">
                <div className="flex items-center gap-2">
                  <InitialName
                    firstName={oneUserDetail.firstName}
                    bgAndTextStyle="rounded-lg bg-[#E0F2F4] text-[#0B6B78]"
                    lastName={oneUserDetail.lastName}
                    key={oneUserDetail.id}
                  />
                  <div>
                    <p className="font-semibold">
                      {oneUserDetail.firstName} {oneUserDetail.lastName}
                    </p>
                    <p className="text-gray-600  text-sm">
                      {oneUserDetail.email}
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    {oneUserDetail.statut === "approved" && (
                      <p
                        className={`${statusStyle[0].style} rounded-full  text-center p-1`}
                      >
                        Actif
                      </p>
                    )}{" "}
                    {oneUserDetail.statut === "rejected" && (
                      <p
                        className={`${statusStyle[1].style} rounded-full  text-center p-1`}
                      >
                        Suspendu
                      </p>
                    )}{" "}
                    {oneUserDetail.statut === "pending" && (
                      <p
                        className={`${statusStyle[3].style} rounded-full  text-center p-1`}
                      >
                        En attente
                      </p>
                    )}
                  </p>
                </div>
              </div>
              <div
                className="p-1 rounded-lg bg-gray-200 text-gray-600 flex justify-center items-center size-8"
                onClick={handleView}
              >
                <X />
              </div>
            </div>
            <div className="py-3">
              <p className="text-sm text-gray-500 font-light uppercase">Etablissement</p>
              <p className="font-semibold capitalize">{oneUserDetail.location}</p>
            </div>
            <div className="py-3">
              <p className="text-sm text-gray-500 font-light uppercase">Adresse Email</p>
              <p className="font-semibold capitalize">{oneUserDetail.email}</p>
            </div>
            <div className="py-3">
              <p className="text-sm text-gray-500 font-light uppercase">
                Inscrition
              </p>
              <p className="font-semibold">
                {new Date().toLocaleString("fr-FR", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="py-3">
              <p className="text-sm text-gray-500 font-light uppercase">
                Identifiant
              </p>
              <p className="font-semibold">MED-00{oneUserDetail.id}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAdminDoctor;

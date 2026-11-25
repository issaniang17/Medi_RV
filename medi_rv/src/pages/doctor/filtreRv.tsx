import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patientRV, statusStyle } from "../../constante";
import type { rvDetail } from "../../types/rvDetail";
import DoctorRvCard from "../../components/doctor/acceptedRvCard";
import { toast } from "sonner";
import DetailOneRv from "../../components/detailOneRv";

const FiltreRv = () => {
  const { slug } = useParams();
  const [viewDetail, setViewDetail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allRv, setAllRv] = useState<rvDetail[]>();
  const [oneRv, setOneRv] = useState<rvDetail>({
    date: "",
    drImage: "",
    firstName: "",
    heure: "",
    id: 0,
    lastName: "",
    lieu: "",
    speciality: "",
    status: "",
  });
  const [styleStatus, setStyleStatus] = useState<{
    status: string;
    style: string;
  }>({ status: "", style: "" });

  useEffect(() => {
    const handleLoad = () => {
      try {
        setLoading(true);
        const visibleRv =
          slug === "all"
            ? patientRV
            : patientRV.filter((item) => item.status === slug);
        setAllRv(visibleRv);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleLoad();
  }, [slug]);

  if (loading) {
    return <div>loading...</div>;
  }

  const handleAccept = (id: number) => {
    const rv = allRv?.find((item) => item.id === id);
    if (!rv) {
      return toast.error("Rv introuvable");
    }
    const updateStatus = { ...rv, status: "accepted" };
    setOneRv(updateStatus);
    setAllRv(allRv?.map((item) => (item.id === id ? updateStatus : item)));
  };
  const handleReject = (id: number) => {
    const rv = allRv?.find((item) => item.id === id);
    if (!rv) {
      return toast.error("Rv introuvable");
    }
    const updateStatus = { ...rv, status: "rejected" };
    setOneRv(updateStatus);
    setAllRv(allRv?.map((item) => (item.id === id ? updateStatus : item)));
  };
  const handleFinish = (id: number) => {
    const rv = allRv?.find((item) => item.id === id);
    if (!rv) {
      return toast.error("Rv introuvable");
    }
    const updateStatus = { ...rv, status: "cancelled" };
    setOneRv(updateStatus);
    console.log(updateStatus);

    setAllRv(allRv?.map((item) => (item.id === id ? updateStatus : item)));
  };
  const handleView = () => {
    setViewDetail(!viewDetail);
    if (!viewDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  const handleViewRv = (id: number) => {
    const rv = allRv?.find((item) => item.id === id);
    console.log(rv);
    if (!rv) {
      return toast.error("Rv introuvable");
    }
    setOneRv(rv);
    setStyleStatus({
      status: oneRv.status,
      style: statusStyle.filter((item) => item.status === rv.status)[0].style,
    });
    handleView();
  };

  return (
    <div>
      <div className="overflow-x-scroll flex flex-col divide-y divide-blue-100 shadow-sm/30 rounded-2xl">
      <div className="grid grid-cols-5 gap-3 uppercase w-300 sm:w-400 py-5 text-gray-500 font-semibold px-4 md:px-6">
        <p>patient</p>
        <p>date</p>
        <p>heure</p>
        <p>statut</p>
        <p>actions</p>
      </div>
        {allRv?.map((item) => (
          <DoctorRvCard
            accepter={handleAccept}
            date={item.date}
            firstName={item.firstName}
            heure={item.heure}
            id={item.id}
            lastName={item.lastName}
            motif="Douleur"
            refuser={handleReject}
            status={item.status}
            terminer={handleFinish}
            voirDetails={handleViewRv}
            generalCard
            width="w-300 sm:w-400 rounded-none"
            key={item.id}
          />
        ))}
        {viewDetail && (
          <DetailOneRv
            date={oneRv.date}
            firstName={oneRv.firstName}
            heure={oneRv.heure}
            id={oneRv.id}
            lastName={oneRv.lastName}
            lieu={oneRv.lieu}
            motif="Douleur"
            status={oneRv.status}
            style={styleStatus.style}
            viewDetail={handleView}
          />
        )}
      </div>
    </div>
  );
};

export default FiltreRv;

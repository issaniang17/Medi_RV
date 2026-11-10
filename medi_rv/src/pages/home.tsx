import { ArrowRight, Calendar } from "lucide-react";
import LinkBtn from "../components/linkBtn";
import Navbar from "../components/navbar";
import PulseAvailable from "../components/pulseAvailable";
import SearchDoctor from "../components/searchDoctor";
import Specialities from "../components/specialities";
import CommentMarche from "../components/comment_marche";

const Home = () => {
  return (
    <div className="flex flex-col bg-linear-to-b md:bg-linear-to-r from-[#0B6370] to-[#0D343C] text-white ">
      <Navbar />
      <div className="mt-20 px-8 py-10 flex flex-col gap-8 space-y-4">
        <PulseAvailable />
        <div className="text-4xl font-bold space-y-3 md:w-1/2">
          <p>Prenez rendez-vous <br /> avec un médecin <br /> <span className="bg-[#109daf] text-transparent bg-clip-text">en quelques minutes.</span> </p>
          <p className="font-normal tracking-tight text-lg opacity-80">MediRV connecte les patients aux professionnels de santé partout au Sénégal. Consultez les disponibilités en temps réel, réservez en ligne et recevez une confirmation instantanée.</p>
        </div>
        <SearchDoctor/>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:w-1/2 px-8 mb-3">
        <LinkBtn  name="Prendre rendez-vous" icon={<Calendar/>} url="/appointments" style="bg-[#E07B39] hover:bg-[#c65a13]" key={`rendez-vous`}/>
        <LinkBtn  name="Trouver un médecin" icon={<ArrowRight/>} url="/doctors" style="bg-[#0B6370] flex-row-reverse hover:bg-[#064650]" key={`medecin`}/>
      </div>
      <Specialities/>
      <CommentMarche/>
    </div>
  );
};

export default Home;

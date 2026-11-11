import { Heart } from "lucide-react";
import { footerLink, socialMedia, supportMediRV } from "../constante";
import SocialMediaCard from "./socialMediaCard";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#0D2E35] gap-5 px-3 py-12" id="contact">
      <div className="flex gap-2 items-center font-black text-xl">
        <div className="rounded-2xl p-3 flex justify-center items-center bg-[#3BAA9E] ">
          <Heart />
        </div>
        <p>MediRV</p>
      </div>
      <div className="my-3 space-y-3">
        <p className="opacity-70 text-lg">
          La plateforme de prise de rendez-vous médicaux en ligne, conçue pour
          le Sénégal.
        </p>
        <div className="flex items-center gap-4">
          {socialMedia.map((item) => (
            <SocialMediaCard icon={item.icon} url={item.url} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-3">
          <h2 className="uppercase font-semibold ">plateforme</h2>
          <div className="flex flex-col gap-3 text-sm">
            {footerLink.plateforme.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="opacity-70 hover:opacity-100"
              >
                {item.nom}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="uppercase font-semibold ">Spécialités</h2>
          <div className="flex flex-col gap-3 text-sm">
            {footerLink.specialites.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="opacity-70 hover:opacity-100"
              >
                {item.nom}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="uppercase font-semibold ">professionnels</h2>
          <div className="flex flex-col gap-3 text-sm">
            {footerLink.professionnels.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="opacity-70 hover:opacity-100"
              >
                {item.nom}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="uppercase font-semibold ">aide</h2>
          <div className="flex flex-col gap-3 text-sm">
            {footerLink.aide.map((item, index) =>
              item.url.includes("#") ? (
                <a href={item.url}>{item.nom}</a>
              ) : (
                <Link
                  to={item.url}
                  key={index}
                  className="opacity-70 hover:opacity-100"
                >
                  {item.nom}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 space-x-5  my-5 border-t border-b border-[#3baa9f5f] py-8 px-5 text-sm">
        {supportMediRV.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {<item.icon color="#3BAA9E" size={15} />}{" "}
            <p className="opacity-70">{item.info}</p>
          </div>
        ))}
      </div>

      <div className="flex  items-center font-normal text-sm">
        <p>
          &copy;
          {"   "}
          {new Date().getFullYear()}
          {"   "}
          MediRDV — Tous droits réservés. Fait avec soin au Sénégal.
        </p>
      </div>
    </div>
  );
};

export default Footer;

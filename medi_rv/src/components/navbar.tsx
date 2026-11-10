import { NavLink } from "react-router-dom";
import { navbar } from "../constante";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [changeBgColor, setChangeBgColor] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const handleClick = () => {
    setMobileView(!mobileView);
  };
  useEffect(() => {
    const positionY = () => {
      if (window.scrollY > 50) {
        setChangeBgColor(true);
      } else {
        setChangeBgColor(false);
      }
    };
    window.addEventListener("scroll", positionY);
    return () => {
      window.removeEventListener("scroll", positionY);
    };
  }, []);
  return (
    <nav
      className={`md:px-3 md:py-4   flex flex-col justify-between items-center fixed z-100 top-0 left-0 w-full transition-colors duration-200 ease-in ${changeBgColor ? "md:bg-white md:text-gray-500 bg-gray-200" : "bg-linear-to-r from-[#0B6370] to-[#0D343C]"}`}
    >
      <div className=" justify-between hidden md:flex w-full">
        {navbar.map((item, index) =>
          item.nom === "Inscription" ? (
            <NavLink
              to={item.url}
              className={`p-2 inline-flex items-center justify-center rounded-lg ${changeBgColor ? "bg-[#0B6B78] text-white" : "bg-white text-[#0B6B78]"}`}
            >
              {item.nom}
            </NavLink>
          ) : item.url.includes("#") ? (
            <a href={item.url}>{item.nom}</a>
          ) : (
            <NavLink
              to={item.url}
              key={index}
              className="flex gap-2 items-center"
            >
              {item.icon && (
                <item.icon className="shadow-lg bg-[#0B6B78] p-1 rounded-lg text-white" />
              )}
              {item.nom === "MediRV" ? (
                <p
                  className={`font-bold text-xl md:text-2xl ${changeBgColor && "text-black"}`}
                >
                  {item.nom}
                </p>
              ) : (
                <p className="font-semibold text-lg">{item.nom}</p>
              )}
            </NavLink>
          ),
        )}
      </div>
      <div className="flex justify-between md:hidden w-full px-3 py-4">
        {navbar.slice(0, 1).map((item, index) => (
          <NavLink to={item.url} key={index} className={"flex gap-2"}>
            {item.icon && (
              <item.icon className="shadow-lg bg-[#0B6B78] p-1 rounded-lg text-white" />
            )}
            <p
              className={`font-bold text-xl md:text-2xl ${changeBgColor && "text-black"}`}
            >
              {item.nom}
            </p>
          </NavLink>
        ))}
        <div className={`${changeBgColor ? "text-black" : "text-white"}`}>
          {mobileView ? (
            <X onClick={handleClick} />
          ) : (
            <Menu onClick={handleClick} />
          )}
        </div>
      </div>
      {mobileView && (
        <div className="flex flex-col md:hidden gap-2 px-8 py-5 bg-white text-black w-full ">
          {navbar.slice(1).map((item, index) =>
            item.nom !== "Connexion" && item.nom !== "Inscription" ? (
              <a
                onClick={handleClick}
                href={item.url}
                key={index}
                className="hover:bg-gray-200 p-2 rounded-lg duration-200 ease-in transition-colors"
              >
                {item.nom}
              </a>
            ) : (
              <NavLink
                onClick={handleClick}
                to={item.url}
                key={index}
                className={`inline-flex justify-center items-center border w-full p-2 rounded-lg duration-200 transition-colors ease-in-out ${item.nom === "Connexion" && " border-[#0B6B78] text-[#0B6B78] hover:bg-[#63d8e8]"} ${item.nom === "Inscription" && "bg-[#0B6B78] hover:bg-[#04424b] text-white"}`}
              >
                {item.nom}
              </NavLink>
            ),
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

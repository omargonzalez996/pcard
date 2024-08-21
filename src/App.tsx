import { useEffect, useState } from "react";
import SwitchToggle from "./components/SwitchToggle";
import { Icon } from "@iconify/react";
import data from "./content/data.json";

function App() {
  const [lang, setLang] = useState(data.text.spanish);
  const [toggleLang, setToggleLang] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modeIcon, setModeIcon] = useState(
    <Icon icon="material-symbols:light-mode" />
  );
  const skills = data.skills;

  useEffect(() => {
    toggleLang ? setLang(data.text.english) : setLang(data.text.spanish);
  }, [toggleLang]);

  useEffect(() => {
    darkMode
      ? setModeIcon(<Icon icon="material-symbols:dark-mode" />)
      : setModeIcon(<Icon icon="material-symbols:light-mode" />);
  }, [darkMode]);

  return (
    <>
      {/* TOGGLES */}
      <div className="absolute right-5 top-10 flex flex-col space-y-2">
        <SwitchToggle
          description={lang.abreviation}
          isSelected={toggleLang}
          setIsSelected={setToggleLang}
        />
        <SwitchToggle
          description={modeIcon}
          isSelected={darkMode}
          setIsSelected={setDarkMode}
        />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col items-center justify-start h-svh w-lvw bg-slate-300 antialiased">
        <div className="flex items-center justify-center w-full h-36 ">
          <div className="flex items-center justify-center drop-shadow-xl relative top-10 rounded-full bg-slate-800 w-4/12 h-4/12 max-w-40 border-white border-4">
            <img src="/logo.png" alt="logo.png" />
          </div>
        </div>
        <div className="bg-white mt-20 p-2 rounded-md shadow-xl">
          <h2 className="text-3xl text-center">{lang.name}</h2>
        </div>
        <div className="mt-6 text-slate-900 flex flex-col items-center font-">
          <p className=" text-md font-bold text-center">{lang.job}</p>
          <p className="mt-3 text-xs text-center w-10/12 max-w-96">
            {lang["job-description"]}
          </p>
        </div>
        <div className="">
          <div>Habilidades de Software</div>
          {}
        </div>
      </div>
    </>
  );
}

export default App;

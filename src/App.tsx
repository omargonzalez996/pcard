import { useEffect, useState } from "react";
import SwitchToggle from "./components/SwitchToggle";
import classNames from "classnames";
import { Icon } from "@iconify/react";
import data from "./content/data.json";

function App() {
  const [lang, setLang] = useState(data.text.spanish);
  const [toggleLang, setToggleLang] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modeIcon, setModeIcon] = useState(
    <Icon icon="material-symbols:light-mode" />
  );

  interface skill {
    id: number;
    name: string;
    logo_url: string;
  }

  interface skills {
    skill: skill;
  }

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
      <div
        className={classNames(
          "flex flex-col items-center justify-start h-svh w-lvw bg-slate-300 antialiased transition-colors duration-300 ease-in-out",
          {
            "bg-slate-900": darkMode,
          }
        )}
      >
        <div className="flex items-center justify-center w-full h-36 ">
          <div
            className={classNames(
              "flex items-center justify-center drop-shadow-xl relative top-10 rounded-full bg-slate-800 w-4/12 h-4/12 max-w-40 border-white border-4",
              {
                "border-black bg-black": darkMode,
              }
            )}
          >
            <img
              className="rounded-full w-full"
              src={darkMode ? "/sakurai.webp" : "/whitefat.jpg"}
              alt="logo.png"
            />
            {/* <img src="/logo.png" alt="logo.png" /> */}
          </div>
        </div>
        <div
          className={classNames("bg-white mt-20 p-2 rounded-md shadow-xl", {
            "bg-gray-800": darkMode,
          })}
        >
          <h2
            className={classNames("text-3xl text-center text-slate-900", {
              "text-gray-100": darkMode,
            })}
          >
            {lang.name}
          </h2>
        </div>
        <div
          className={classNames(
            "mt-6 text-slate-900 flex flex-col items-center",
            {
              "text-gray-100": darkMode,
            }
          )}
        >
          <p className=" text-md font-bold text-center">{lang.job}</p>
          <p className="mt-3 text-xs text-center w-10/12 max-w-96">
            {lang["job-description"]}
          </p>
        </div>
        <div className="mt-5">
          <div
            className={classNames(
              "text-md font-bold text-center mb-5 text-slate-900",
              {
                "text-gray-100": darkMode,
              }
            )}
          >
            {lang["skills-title"]}
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {skills.map((skill) => (
              <img
                className="w-7 mr-1 shadow-md "
                key={skill.id}
                src={`${skill.logo_url}`}
                alt={`${skill.name}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

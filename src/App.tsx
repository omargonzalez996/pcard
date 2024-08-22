import { useEffect, useState } from "react";
import SwitchToggle from "./components/SwitchToggle";
import MailModal from "./components/MailModal";
import classNames from "classnames";
import { Icon } from "@iconify/react";
import data from "./content/data.json";

function App() {
  const [textContent, setTextContent] = useState(data.text.spanish);
  const [toggleLang, setToggleLang] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modeIcon, setModeIcon] = useState(
    <Icon icon="material-symbols:light-mode" />
  );

  const skills = data.skills;
  const social = data.social;

  useEffect(() => {
    toggleLang
      ? setTextContent(data.text.english)
      : setTextContent(data.text.spanish);
    console.log("eng: ", toggleLang);
  }, [toggleLang]);

  useEffect(() => {
    darkMode
      ? setModeIcon(<Icon icon="material-symbols:dark-mode" />)
      : setModeIcon(<Icon icon="material-symbols:light-mode" />);
    console.log("darkMode: ", darkMode);
  }, [darkMode]);

  const openModal = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {/* TOGGLES */}
      {showModal ? (
        <MailModal
          setShowModal={setShowModal}
          darkMode={darkMode}
          content={textContent}
        />
      ) : null}
      <div className="absolute right-5 top-10 flex flex-col space-y-2 z-10">
        <SwitchToggle
          description={textContent.abreviation}
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
              "flex items-center justify-center drop-shadow-xl relative top-10 rounded-full bg-slate-400 w-4/12 h-4/12 max-w-40 border-white border-4",
              {
                "border-gray-700 bg-slate-950": darkMode,
              }
            )}
          >
            <img className="rounded-full" src="/sakurai.webp" alt="logo.png" />
            {/* <img src="/logo.png" alt="logo.png" /> */}
          </div>
        </div>
        <div
          className={classNames("bg-white mt-20 p-2 rounded-md shadow-xl", {
            "bg-gray-700": darkMode,
          })}
        >
          <h2
            className={classNames("text-3xl text-center text-slate-900", {
              "text-gray-100": darkMode,
            })}
          >
            {textContent.name}
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
          <p className=" text-md font-bold text-center">{textContent.job}</p>
          <p className="mt-3 text-xs text-center w-10/12 max-w-96">
            {textContent["job-description"]}
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
            {textContent["skills-title"]}
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-2 md:grid-cols-10 gap-1">
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
        <div className="mt-5">
          <div>
            <h2
              className={classNames(
                "text-md font-bold text-center mb-5 text-slate-900",
                {
                  "text-gray-100": darkMode,
                }
              )}
            >
              {textContent["contact-title"]}
            </h2>
          </div>
        </div>
        <div
          className={classNames("flex justify-center space-x-5", {
            "text-gray-200": darkMode,
          })}
        >
          {social.map((social) => (
            <a
              key={social.id}
              className="cursor-pointer"
              href={social.profile_url}
            >
              <Icon width={50} icon={social.logo_url} />
            </a>
          ))}
        </div>
        <div className="mt-7">
          <button
            onClick={(e) => openModal(e)}
            className="cursor-pointer border-none rounded-md bg-white p-3 shadow-md"
          >
            {textContent["mail-button"]}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

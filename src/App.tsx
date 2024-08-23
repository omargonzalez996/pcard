import SwitchToggle from "./components/SwitchToggle";
import MailModal from "./components/MailModal";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "./content/data.json";
import { Icon } from "@iconify/react";
import classNames from "classnames";

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
          "flex flex-col items-center justify-start h-svh w-lvw antialiased transition-colors duration-300 ease-in-out",
          {
            "bg-slate-900": darkMode,
            "bg-slate-300": !darkMode,
          }
        )}
      >
        <div className="flex items-center justify-center w-full h-36 ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -50, right: 50 }}
            className={classNames(
              "flex items-center justify-center drop-shadow-xl relative top-10 rounded-full w-4/12 h-4/12 max-w-40 border-4",
              {
                "border-gray-700 bg-slate-950": darkMode,
                "border-white bg-slate-400": !darkMode,
              }
            )}
          >
            <img className="rounded-full" src="/sakurai.webp" alt="logo.png" />
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -50, right: 50 }}
          className={classNames("mt-20 p-2 rounded-md shadow-xl", {
            "bg-gray-700": darkMode,
            "bg-white": !darkMode,
          })}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className={classNames("text-3xl text-center", {
              "text-gray-100": darkMode,
              "text-slate-900": !darkMode,
            })}
          >
            {textContent.name}
          </motion.h2>
        </motion.div>
        <div
          className={classNames("mt-6 flex flex-col items-center", {
            "text-gray-100": darkMode,
            "text-slate-900": !darkMode,
          })}
        >
          <p className=" text-md font-bold text-center">{textContent.job}</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mt-3 text-xs text-center w-10/12 max-w-96"
          >
            {textContent["job-description"]}
          </motion.p>
        </div>
        <div className="mt-5">
          <div
            className={classNames("text-md font-bold text-center mb-5", {
              "text-gray-100": darkMode,
              "text-slate-900": !darkMode,
            })}
          >
            {textContent["skills-title"]}
          </div>
          <div className="grid grid-cols-8 sm:grid-cols-2 md:grid-cols-10 gap-1">
            {skills.map((skill) => (
              <motion.img
                className="w-7 mr-1 shadow-md "
                key={skill.id}
                src={`${skill.logo_url}`}
                alt={`${skill.name}.svg`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: skill.id * 0.05, // Incrementa el delay para cada elemento
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h2
              className={classNames("text-md font-bold text-center mb-5", {
                "text-gray-100": darkMode,
                "text-slate-900": !darkMode,
              })}
            >
              {textContent["contact-title"]}
            </h2>
          </div>
        </div>
        <div
          className={classNames("flex justify-center space-x-5", {
            "text-gray-100": darkMode,
            "text-slate-900": !darkMode,
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

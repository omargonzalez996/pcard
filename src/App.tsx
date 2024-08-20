import "react-toggle/style.css";
import Toggle from "react-toggle";
import { useState } from "react";
import data from "./content/data.json";

function App() {
  const [lang, setLang] = useState(data.text.spanish);

  return (
    <>
      <div className="absolute">
        <label>
          <Toggle
            defaultChecked={this.state.tofuIsReady}
            icons={false}
            onChange={this.handleTofuChange}
          />
          <span>No icons</span>
        </label>
      </div>
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
        <div></div>
      </div>
    </>
  );
}

export default App;

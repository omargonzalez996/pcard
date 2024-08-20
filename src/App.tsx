function App() {
  return (
    <div className="flex flex-col items-center justify-start h-svh w-lvw bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
      <div className="flex items-center justify-center w-full h-36 ">
        <div className="flex items-center justify-center drop-shadow-md relative top-10 rounded-full bg-slate-800 w-4/12 h-4/12 max-w-40 border-white border-4">
          <img src="/logo.png" alt="logo.png" />
        </div>
      </div>
      <div className="bg-white mt-28 p-2 rounded-md">
        <h2 className="text-3xl text-center">Omar González</h2>
      </div>
      <div className="mt-5 text-white flex flex-col items-center font-">
        <p className=" text-md font-bold text-center">
          Desarrollador Web | Especialista en Backend
        </p>
        <p className="mt-3 text-xs text-center w-10/12 max-w-96">
          Transformando ideas en soluciones tecnológicas eficientes. Con
          experiencia en Node.js, MySQL, y API design, me enfoco en crear
          aplicaciones robustas y escalables para mejorar la experiencia del
          usuario y optimizar procesos empresariales.
        </p>
      </div>
    </div>
  );
}

export default App;

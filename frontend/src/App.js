import HistorialClima from "./components/HistorialClima";
import IngresarClima from "./components/IngresarClima";
import { useState } from "react";
function App() {
  const [fun, setFun] = useState(0)

  const onClickClima = () => setFun(1)
  const onClickHistorial = () => setFun(2)

  return (
    <div className="flex items-center flex-col h-screen">
        <h1 className="text-gray-500 py-10 flex font-serif font-semibold text-4xl">
          Weather app
        </h1>
        <div className="flex flex-row gap-x-10 pb-10">
          <button type="button" className="bg-cyan-400  m-2 border-solid border-black rounded-lg px-5 py-2.5 me-2 mb-2
            hover:bg-cyan-500 hover:text-white font-medium" onClick={onClickClima}>
            Enter Weather
          </button>
          <button type="button" className="bg-cyan-400  m-2 border-solid border-black rounded-lg px-5 py-2.5 me-2 mb-2
            hover:bg-cyan-500 hover:text-white font-medium" onClick={onClickHistorial}>
            Search Weather
          </button>
        </div>
        {fun===1 ? <IngresarClima/> : <HistorialClima/>}
    </div>
  );
}

export default App;

import HistorialClima from "./components/HistorialClima";
import IngresarClima from "./components/IngresarClima";
import { useEffect, useState } from "react";
function App() {
  const [fun, setFun] = useState(0)

  const onClickClima = () => setFun(1)
  const onClickHistorial = () => setFun(2)

  useEffect(()=>{
    setFun(0)
  },[])
  return (
    <div className="flex items-center flex-col h-screen">
        <h1 className="text-gray-500 py-10 flex font-serif font-semibold text-4xl">
          Weather app
        </h1>
        <div className="flex flex-row gap-x-10">
          <button className="bg-slate-500" onClick={onClickClima}>
            Ingresar Clima
          </button>
          <button className="bg-slate-500" onClick={onClickHistorial}>
            Consultar clima
          </button>
        </div>
        {fun===1 ? <IngresarClima/> : <HistorialClima/>}
    </div>
  );
}

export default App;

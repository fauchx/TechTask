import React from 'react'

export default function IngresarClima() {
  return (
    <div className="flex flex-row ga">
          <div className="flex flex-row m-6">
            <p>
              Nombre de la ciudad
            </p>
            <input type="text" className="bg-slate-400 p-2 m-1 text-black" placeholder="Ciudad" />
          </div>
        </div>
  )
}

import React, { useEffect, useState } from 'react'
import { HistoryWeather } from '../service/WeatherService'

function HistorialClima() {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    
    HistoryWeather()
    .then((response) =>{
      setData(response)
    })
    .finally(
      setLoading(false)
    )
  },[])
  return (
    <div>
      {
        loading ? <p className='items-center justify-center text-2xl font-bold'>Loading Weathers...</p> : (
                <div className='relative  overflow-x-auto '>
              <table className='max-w-2xl mx-auto roudned-sm text-md text-left'>
                  <thead className='text-sm bg-emerald-200 uppercase'>
                    <tr>
                      <th scope="col" class="px-6 py-3">
                          City
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Degrees
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Condition
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Hour
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(city=>(
                      <tr key={city.id} className='bg-cyan-50 border-b'>
                        <th scope='row' className='px-6 py-4 whitespace-nowrap font-medium'>
                          {city.city}
                        </th>
                        <td className='px-6 py-4'>
                          {city.degree}
                        </td>
                        <td className='px-6 py-4'>
                          {city.condition}
                        </td>
                        <td className='px-6 py-4'>
                          {city.time.split(':').slice(0, 2).join(':')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
          </div>
        )
      }
    </div>
  )
}

export default HistorialClima
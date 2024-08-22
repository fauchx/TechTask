import React, { useState } from 'react';
import { submitWeather } from '../service/WeatherService';

export default function IngresarClima() {
  const [city, setCity] = useState("");
  const [degree, setDegree] = useState(0);
  const [condition, setCondition] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setMessage("");

    if (!city || degree === 0 || !condition) {
      setMessage("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    const data = {
      city: city,
      degree: degree,
      condition: condition
    };

    try {
      await submitWeather(data);
      setMessage("Weather data submitted successfully!");
    } catch (error) {
      setMessage("Failed to submit weather data. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className='max-w-xl mx-auto p-10 bg-cyan-200/10 rounded-sm' onSubmit={onSubmitForm}>
      <div className='grid md:grid-cols-3 md:gap-6'>
      <div className='relative z-0 w-full mb-5'>
          <input
            type='text'
            name='City'
            id='City'
            className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer'
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label
            htmlFor='City'
            className='absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            City
          </label>
      </div>


        <div className='relative z-0 w-full mb-5'>
          <input
            type='number'
            name='Degree'
            id='Degree'
            className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer'
            onChange={(e) => setDegree(e.target.value)}
            required
          />
          <label
            htmlFor='Degree'
            className='absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Degree
          </label>
      </div>


        <div className='relative z-0 w-full mb-5'>
          <input
            type='text'
            name='Condition'
            id='Condition'
            className='block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer'
            onChange={(e) => setCondition(e.target.value)}
            required
          />
          <label
            htmlFor='Condition'
            className='absolute text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Condition
          </label>
      </div>

        <button
          type='submit'
          className={`px-5 py-2.5 m-2 text-balance bg-cyan-400 border-solid border-black rounded-lg me-2 mb-2
            hover:bg-cyan-500 hover:text-white font-medium ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Weather"}
        </button>
      </div>
      {message && <p className="text-center mt-4">{message}</p>}
    </form>
  );
}

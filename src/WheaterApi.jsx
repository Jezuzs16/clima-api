import { useState } from 'react'
import { kelvinToCelsius } from './helpers/kelvinToCelsius'
import { fetchClima } from './helpers/fetchClima'
import { DarkMode } from './components/DarkMode'


export const WheaterApi = () => {

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '6eef996d7a86a531e3fa261920381b9c'
  const [ciudad, setCiudad] = useState('')
  const [dataClima, setdataClima] = useState(null)

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (ciudad.length > 0) {
      const url = `${urlBase}?q=${ciudad}&appid=${API_KEY}`
      try {
        const data = await fetchClima(url)
        setdataClima(data)
      } catch (error) {
        console.log('Ocurrió un problema: ', error)
      }
    }
  }

  return (
    <div className='container'>
      <DarkMode />
      <h1>Aplicacion del Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Ciudad'
          type="text"
          value={ciudad}
          onChange={handleCambioCiudad}
        />
        <button type='submit'>Buscar</button>
      </form>
      {
        dataClima && (
          <div>
            <h2>{dataClima.name}</h2>
            <p>Temperatura: {kelvinToCelsius(dataClima?.main.temp)} °C</p>
            <p>Humedad: {dataClima?.main.humidity}%</p>
            <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="Icono del clima" />
          </div>
        )
      }
    </div>
  )
}

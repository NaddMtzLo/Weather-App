import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

useEffect(() => {
  //Función que se ejecuta cuando llega la información de la ubicación
  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj);
  }

  //Hace el llamado a la API del navegador, para usar la ubicación actual
  navigator.geolocation.getCurrentPosition(success)
}, [])
 
  //Petición del clima
useEffect(() => {
  if(coords){
  const APIKEY = 'bcf6d23de804f548452d073d2195650f'
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  axios.get(URL)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(0)
      const farenheit = (celsius * 9/5 + 32).toFixed(0) 
      setTemperature({celsius, farenheit})
      setWeather(res.data)})
    .catch(err => console.log(err))
  }
}, [coords])
    
console.log(weather)

  return (
    <div className="App">
      <WeatherCard weather={weather} temperature={temperature}/>
    </div>
  )
}

export default App



import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [coords, setCoords] = useState()
 const [weather, setWeather] = useState()

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

console.log(coords)
 
  //Petición del clima
useEffect(() => {
  const APIKEY = 'bcf6d23de804f548452d073d2195650f'
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
  axios.get(URL)
    .then(res => setWeather(res.data))
    .catch(err => console.log(err))
}, [])
    
console.log(weather)

  return (
    <div className="App">Weather App
    </div>
  )
}

export default App



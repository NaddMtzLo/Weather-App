import React, { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = () => setIsCelsius(!isCelsius)

  return (
    <div className='card'>
        <h1 className='card-principal.title'>Weather App</h1>
        <h3 className='card-subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h3>
        <section className='icon-info-container'>
            <img src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
        <li><span>Wind speed:</span>{weather?.wind.speed}m/s</li>
        <li><span>Cloudiness:</span>{weather?.clouds.all}%</li>
        <li><span>Pressure:</span>{weather?.main.pressure}hPa</li>
        </ul>
        </section>
        <h2 className='card-temp'>{isCelsius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F`}</h2>
        <button className='card-btn' onClick={changeTemperature}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
    </div>
  )
}

export default WeatherCard
import './App.css';
import Forcast from './Components/forcast';
import Search from './Components/search';
import Today from './Components/today';

import { useState } from "react"

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcastWeather, setForcastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    let apiKey = "dfd81348aaa5f07b4f17833a13b0cb4b";
    const curruntUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchData.trim()}&units=Metric&appid=${apiKey}`;
    const fosrcasrUrl = ` https://api.openweathermap.org/data/2.5/forecast?q=${searchData.trim()}&units=Metric&appid=${apiKey} `;

    const currentWeatherFetch = fetch(curruntUrl);
    const forcastWeatherFetch = fetch(fosrcasrUrl);

    Promise.all([currentWeatherFetch, forcastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather(weatherResponse);
        setForcastWeather(forcastResponse);

        console.log(currentWeather);
        console.log(forcastWeather);
      })
      .catch(console.log);

  }
  return (
    <div className="RootContainer">
      <div className=" Top">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <Today data={currentWeather} />}
      </div>
      <div className='RootForcast'>
        {forcastWeather && <Forcast data={forcastWeather} />}

      </div>

    </div>
  );
}

export default App;

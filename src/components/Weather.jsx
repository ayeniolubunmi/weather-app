import React, { useEffect, useState } from 'react';
import Search from './Search';
import '../App.css';
const Weather = () => {
    const [search, setSearch]=useState("Lagos");
    const [loading, setLoading]=useState(false);
    const [weatherData, setWeatherData] =useState(null);

    const fetchWeatherData=async(param)=>{
        setLoading(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=f7a5040b9a3ac29fbf45022429c2ff4e`);
            const data = await response.json();
            if(data){
                setWeatherData(data);
                setLoading(false)
            }
            console.log(data)
        } catch (error) {
            
        }
        
    }
    console.log(loading)
    useEffect(()=>{
        fetchWeatherData("Lagos")
    },[])
    const handleSearch=()=>{
        fetchWeatherData(search);
    }
    const getDate=()=>{
        return new Date().toLocaleDateString('en-us',{
            weekday:"long",
            month:"long",
            day:"numeric",
            year:"numeric"
        })
    }
  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      {
        loading ? <div className='loading'>Loading</div> : 
        <div>
            <div className='wi-day-sunny'></div>
            <div className='city-name'>
                <h2>{weatherData?.name}, <span>{weatherData?.sys.country}</span></h2>
            </div>
            <div className='date'>{getDate()}</div>
            <div className='temp'>
                {weatherData?.main?.temp}
            </div>
            <p className='description'>
                {
                weatherData && 
                weatherData.weather && 
                weatherData.weather[0] ? 
                weatherData.weather[0].description : ""}
            </p>
            <div className='weather-info'>
                <div className='column'>
                    <div>
                        <p>{weatherData?.wind?.speed}</p>
                        <p>Speed</p>
                    </div>
                </div>
                <div className='column'>
                    <div>
                        <p>{weatherData?.main?.humidity}</p>
                        <p>humidity</p>
                    </div>
                </div>
                <div className='column'>
                    <div>
                        <p>{weatherData?.main?.pressure}</p>
                        <p>Rain</p>
                    </div>
                </div>
            </div>
        </div>
      }
    </div>
  );
}

export default Weather;

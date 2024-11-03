// import React,{useState} from 'react'
// import './Weather.css'

// import axios from 'axios'
// const APIkey="XqVA5dctWxPVK24Uil1SNZkkgKviG5ZN"
// function Weather() {
//     const[city,setCity]=useState("")
//     const[weatherdata,setWeatherdata] = useState(null)
//     const[error,setError]=useState(null)
//     const handleSubmit= async()=>{
//         try{
//          let response=await axios.get(
//                 `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${APIkey}` 
//             )
//             setWeatherdata(response.data)
//             setError(null)
//         }
// catch(error){
// setError('Failed to fetch the weather data')
// setWeatherdata(null)
    

// }
//     }
//     console.log(weatherdata)
//     console.log(error)
//   return (
   
//     <>
//     <div className='container'>
//       <h1 className='title'>Search Weather Condition</h1>
//       <div className='inputContainer'> 
//       <input type="text" placeholder='Enter City Name' className='input' onChange={(e)=>setCity(e.target.value)}/>
//       <button className='button' onClick={handleSubmit}>Search</button>
//       </div>
    
//     {error&&<p className='error'>error data</p>}
//     {/* //if error is there then only it will print */}
//     {weatherdata&&(
//         <div className='Weather Container'>
//             <h2 className='subtitle'>{weatherdata.location.name}</h2>
//             <p className='temparature'>Temparature:{weatherdata.data.values.temparature}37.89<sup>o</sup>C</p>
//             <p className='humidity'>Humidity:{weatherdata.data.values.humidity}40%</p>
//             <p className='windspeed'>Wind Speed:{weatherdata.data.values.windspeed}0.5mph</p>
//         </div>
//     )}
// </div>
//     </>
  
//   )
// }

// export default Weather






import React, { useState } from 'react';
import './Weather.css';
import axios from 'axios';

const APIkey = "XqVA5dctWxPVK24Uil1SNZkkgKviG5ZN";

function Weather() {
    const [city, setCity] = useState("");
    const [weatherdata, setWeatherdata] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        try {
            const response = await axios.get(
                `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${APIkey}`
            );
            setWeatherdata(response.data);
            setError(null);  // Clear any previous errors
        } catch (error) {
            setError('Failed to fetch the weather data');
            setWeatherdata(null);
        }
    };

    console.log(weatherdata);
    console.log(error);

    return (
        <div className='container'>
            <h1 className='title'>Search Weather Condition</h1>
            <div className='inputContainer'>
                <input
                    type="text"
                    placeholder='Enter City Name'
                    className='input'
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className='button' onClick={handleSubmit}>Search</button>
            </div>

            {/* Display error message if an error occurs */}
            {error && <p className='error'>{error}</p>}

            {/* Display weather data if available */}
            {weatherdata && (
                <div className='weatherContainer'>
                    <h2 className='subtitle'>{weatherdata.location.name}</h2>
                    <p className='temperature'>
                        Temperature: {weatherdata.data.values.temperature}°C
                    </p>
                    <p className='humidity'>
                        Humidity: {weatherdata.data.values.humidity}%
                    </p>
                    <p className='windspeed'>
                        Wind Speed: {weatherdata.data.values.windSpeed} mph
                    </p>
                </div>
            )}
        </div>
    );
}

export default Weather;

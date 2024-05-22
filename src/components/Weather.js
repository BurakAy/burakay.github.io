import { useEffect, useState } from "react";
import '../styles/Weather.css'

function Weather() {
  const [location, setLocation] = useState({ city: '', state: '' });
  const [temperature, setTemperature] = useState();

  // calling this endpoint to get a user's location information
  // city, state, latitude, longitude
  const getLocation = () => {
    const locationAPI = "https://geolocation-db.com/json/"
    fetch(locationAPI)
      .then(response => response.json())
      .then(data => {
        setLocation({ city: data.city, state: data.state });
        getWeather(data.latitude, data.longitude);
      });
  };

  // calling this endpoint and passing in the latitude and longitude coordinates
  // to get the current weather for that location
  const getWeather = (latitude, longitude) => {
    const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`;
    fetch(weatherAPI)
      .then(response => response.json())
      .then(data => setTemperature(data.current.temperature_2m))
  };

  // making sure the APIs are only called on the first render
  // by passing in an empty array as the second parameter
  useEffect(() => {
    getLocation();
  }, [])

  // only displaying the widget if temperature value has been set
  const displayWeatherWidget = () => {
    const widget = 
    <div className="weather-container">
      <p id="location">{location.city}, {location.state }</p>
      <p id="temperature">Current Temp: <span id="temperature_value">{ temperature } &#8457;</span></p>
    </div>

    return temperature ? widget : null; 
  }

  return (
    <>
    {displayWeatherWidget()}
    </>
  );
}

export default Weather;
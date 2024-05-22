import { useEffect, useState } from "react";
import '../styles/Weather.css'

function Weather() {
  const [location, setLocation] = useState({ city: '', state: '' });
  const [temperature, setTemperature] = useState();

  const getLocation = () => {
    const locationAPI = "https://geolocation-db.com/json/"
    fetch(locationAPI)
      .then(response => response.json())
      .then(data => {
        setLocation({ city: data.city, state: data.state });
        getWeather(data.latitude, data.longitude);
      });
  };

  const getWeather = (latitude, longitude) => {
    const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`;
    fetch(weatherAPI)
      .then(response => response.json())
      .then(data => setTemperature(data.current.temperature_2m))
  };

  useEffect(() => {
    getLocation();
  }, [])

  return (
    <div className="weather-container">
      <p id="location">{location.city}, {location.state }</p>
      <p id="temperature">Current Temp: <span id="temperature_value">{ temperature } &#8457;</span></p>
    </div>
  );
}

export default Weather;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeLocation, updateWeatherData } from '../redux/weatherSlice';

const WeatherList = () => {
  const { locations, weatherData } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleWeatherUpdate = (id, weatherInfo) => {
    dispatch(updateWeatherData({ id, weatherInfo }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Weather Locations</h2>
      {locations.map((location) => (
        <div key={location.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{location.name}</h3>
          <button
            onClick={() => dispatch(removeLocation(location.id))}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove Location
          </button>

          {/* Simulated Weather Update */}
          <div className="mt-4">
            <input
              type="number"
              placeholder="Temperature"
              onChange={(e) =>
                handleWeatherUpdate(location.id, { temperature: e.target.value })
              }
              className="block w-full mb-2 border p-2"
            />
            <input
              type="number"
              placeholder="Humidity"
              onChange={(e) =>
                handleWeatherUpdate(location.id, { humidity: e.target.value })
              }
              className="block w-full mb-2 border p-2"
            />
            <input
              type="number"
              placeholder="Wind Speed"
              onChange={(e) =>
                handleWeatherUpdate(location.id, { windSpeed: e.target.value })
              }
              className="block w-full mb-2 border p-2"
            />
          </div>

          {/* Display Weather Data */}
          <div className="mt-4">
            <p>Temperature: {weatherData.find((data) => data.id === location.id)?.temperature || 'N/A'}°C</p>
            <p>Humidity: {weatherData.find((data) => data.id === location.id)?.humidity || 'N/A'}%</p>
            <p>Wind Speed: {weatherData.find((data) => data.id === location.id)?.windSpeed || 'N/A'} km/h</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherList;

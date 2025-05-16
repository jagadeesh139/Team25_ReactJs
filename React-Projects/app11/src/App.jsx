import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Weatherofrm from './components/Weatherform';
import WeatherList from './components/WeatherList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🌤️ Weather App</h1>
        <Weatherform />
        <WeatherList />
      </div>
    </Provider>
  );
};

export default App;
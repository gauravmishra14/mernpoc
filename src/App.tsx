import React from 'react';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';
import CityWeatherDetails from './components/CityWeatherDetail';

const App: React.FC = () => {
  return (
    <Provider store={store}>
       <div className="App">
        <List />
        <CityWeatherDetails />
    </div>
    </Provider>
  );
}

export default App;

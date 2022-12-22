import React from 'react';
import { useWeatherInfo } from './context/MainContext';
import CityInfo from './components/CityInfo';
import TodayInfo from './components/TodayInfo';
function App() {
    const { weather } = useWeatherInfo();

    return (
        <>

            <div className="container">
                {weather && <CityInfo />}

                {weather && <TodayInfo />}
            </div>

           
        </>
    );
}

export default App;

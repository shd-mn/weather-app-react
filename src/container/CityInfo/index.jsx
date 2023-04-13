import React from 'react';
import { useWeatherInfo } from '../../context/MainContext';
import Icon from '../../icons';
import { weatherIcons } from './data/weatherIcons';

// import ChangeLocation from './ChangeLocation';
function CityInfo() {
    const { currentWeather } = useWeatherInfo();
    const { main, description } = currentWeather.weather[0];

    return (
        <div className="city-info">
            <figure className="icon"></figure>
            <Icon icon={weatherIcons[main]} size={84} />
            <p className="description">{description}</p>
            <h1 className="heading-primary">{currentWeather.main.temp} °C</h1>
            <h3 className="heading-4">{currentWeather.name}</h3>
            {/* <ChangeLocation /> */}
        </div>
    );
}

export default CityInfo;

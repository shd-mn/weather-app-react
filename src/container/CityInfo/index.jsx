import React from 'react';
import { useWeatherInfo } from '../../context/MainContext';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
function CityInfo() {
    const {
        currentWeather,
        weather: { current },
    } = useWeatherInfo();

    const { main, description } = current.weather[0];

    return (
        <div className="city-info">
            <Icon icon={weatherIcons[main]} size={84} />
            <p className="description">{description}</p>
            <h1 className="heading-primary">{current.temp} °C</h1>
            <h3 className="heading-4">{currentWeather.name}</h3>
        </div>
    );
}

export default CityInfo;

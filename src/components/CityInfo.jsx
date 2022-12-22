import React from 'react';
import { useWeatherInfo } from '../context/MainContext';
import ChangeLocation from './ChangeLocation';
// import Icon from '../Icon';
function CityInfo() {
    const { weather } = useWeatherInfo();
    return (
        <div>
            {/* <Icon icon="rain" size="128px" /> */}
            {weather.weather.map((info, id) => (
                <h3 key={id} className="heading-secondary">
                    {info.main}
                </h3>
            ))}
            <p>{weather.name}</p>
            <h1 className="heading-primary">{weather.main.temp} °C</h1>
            <ChangeLocation />
        </div>
    );
}

export default CityInfo;

import React from 'react';
import { useWeatherInfo } from '../../context/MainContext';
import { currentInfoData } from './data/currentInfoData';

function CurrentWeather() {
    const { currentWeather } = useWeatherInfo();
    const info = currentInfoData(currentWeather);

    return (
        <div className="current-weather">
            {info.map((data) => (
                <div key={data.id} className="info">
                    {data.icon}
                    <div>
                        <p>{data.title}</p>
                        <h4 className="heading-4">
                            {data.value} {data.sign}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CurrentWeather;

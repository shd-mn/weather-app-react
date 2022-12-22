import React from 'react';
import { useWeatherInfo } from '../context/MainContext';

function TodayInfo() {
    const { weather } = useWeatherInfo();
    return (
        <div className="today-info">
            <div className="humidty">
                <p>Humidty</p>
                <h4 className='heading-4'>{weather.main.humidity} %</h4>
            </div>
            <div className="pressure">
                <p>Air Pressure</p>
                <h4 className='heading-4'>{weather.main.pressure} PS</h4>
            </div>
            <div className="clouds">
                <p>Clouds</p>
                <h4 className='heading-4'>{weather.clouds.all} %</h4>
            </div>
            <div className="chance-rain">
                <p>Wind Speed</p>
                <h4 className='heading-4'>{weather.wind.speed} km/h</h4>
            </div>
        </div>
    );
}

export default TodayInfo;

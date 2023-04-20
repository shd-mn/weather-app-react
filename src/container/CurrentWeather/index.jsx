import React from 'react';
import { useWeatherInfo } from '../../context/MainContext';
import { currentInfoData } from './data/currentInfoData';
import moment from 'moment';
function CurrentWeather() {
    const { weather } = useWeatherInfo();
    const info = currentInfoData(weather.current);
    const time = new Date(weather.current.dt * 1000)
    console.log(moment(time).format('D MMM YYYY h:m'))

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

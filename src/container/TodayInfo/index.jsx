import React from 'react';
import { useWeatherInfo } from '../../context/MainContext';
import { todayInfoData } from './data/todayInfoData';

function TodayInfo() {
    const { currentWeather } = useWeatherInfo();
    const info = todayInfoData(currentWeather);
    return (
        <div className="today-info">
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

export default TodayInfo;

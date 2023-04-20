import React from 'react';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
import moment from 'moment';
const HourlyForecast = ({ weather }) => {
    return (
        <>
            {weather.hourly.slice(0,24).map((hour, index) => (
                <div key={hour.dt} className="hourly-forecast">
                    <p className="time">
                        {index === 0
                            ? 'Now'
                            : moment(hour.dt * 1000).format('kk:mm') === '24:00' ? moment(hour.dt * 1000).format('DD/MMM') : moment(hour.dt * 1000).format('kk:mm')}
                    </p>
                    <h2 className="heading-4">{hour.temp.toFixed(0)}° C</h2>
                    <Icon icon={weatherIcons[hour.weather[0].main]} size={36} />
                    <p >{hour.wind_speed} m/s</p>
                    <h2 className="forecast-desc">
                        Feels like {hour.feels_like.toFixed(0)}°C
                    </h2>
                </div>
            ))}
        </>
    );
};

export default HourlyForecast;

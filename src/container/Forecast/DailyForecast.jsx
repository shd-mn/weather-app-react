import React from 'react';
import moment from 'moment';
const DailyForecast = ({ weather }) => {
    return (
        <>
            {weather.daily.map((day, index) => (
                <div key={day.dt} className="daily-forecast">
                    <p className="time">
                        {index === 0
                            ? 'Today'
                            : moment(day.dt * 1000).format('DD MMM')}
                    </p>
                    <h2 className="heading-5">
                        {day.temp.day.toFixed(0)}° / {day.temp.night.toFixed(0)}
                        °
                    </h2>
                    <h2 className="forecast-desc">
                        Feels like {day.feels_like.day.toFixed(0)}°C
                    </h2>
                </div>
            ))}
        </>
    );
};

export default DailyForecast;

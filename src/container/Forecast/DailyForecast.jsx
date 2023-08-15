import React from 'react';
import moment from 'moment';
import styles from './dailyForecast.module.scss';
const DailyForecast = ({ weather }) => {
    return (
        <>
            {weather.daily.map((day, index) => (
                <div key={day.dt} className={styles['daily-forecast']}>
                    <p className={styles.time}>
                        {index === 0
                            ? 'Today'
                            : moment(day.dt * 1000).format('DD MMM')}
                    </p>
                    <h2 className="heading-5">
                        {day.temp.day.toFixed(0)}° / {day.temp.night.toFixed(0)}
                        °
                    </h2>
                    <h2 className={styles["forecast-desc"]}>
                        Feels like {day.feels_like.day.toFixed(0)}°C
                    </h2>
                </div>
            ))}
        </>
    );
};

export default DailyForecast;

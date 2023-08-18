import React from 'react';
import moment from 'moment';
import styles from './dailyForecast.module.scss';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
const DailyForecast = ({ weather }) => {
    return (
        <>
            {weather.daily.map((day, index) => (
                <article key={day.dt} className={styles['daily-forecast']}>
                    <p className={styles.time}>
                        {index === 0
                            ? 'Today'
                            : moment(day.dt * 1000).format('DD MMM')}
                    </p>
                    <h2 className="heading-5">
                        {day.temp.day.toFixed(0)}° / {day.temp.night.toFixed(0)}
                        °
                    </h2>
                    <Icon icon={weatherIcons[day.weather[0].main]} size="2.8rem" />
                    <div className={styles['forecast-info']}>
                        <p className={styles['feels-like']}>
                            Feels like {day.feels_like.day.toFixed(0)}°C
                        </p>
                        <p className={styles.info}>
                            <Icon icon="wind-speed" size="2.2rem" />
                            {day.wind_speed} m/s
                        </p>
                        <p className={styles.info}>
                            <Icon icon="cloud" size="2.2rem" /> {day.clouds} %
                        </p>
                        <p className={styles.info}>
                            <Icon icon="pressure" size="2.2rem" />
                            {day.pressure} PS
                        </p>
                        <p className={styles.info}>
                            <Icon icon="humidity" size="2.2rem" />
                            {day.humidity} %
                        </p>
                    </div>
                </article>
            ))}
        </>
    );
};

export default DailyForecast;

import React, { useState } from 'react';
import moment from 'moment';
import styles from './dailyForecast.module.scss';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
import Info from '../../components/common/Info';
const DailyForecast = ({ day, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <article
            className={styles['daily-forecast']}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Time */}
            <p className={styles.time}>
                {index === 0 ? 'Today' : moment(day.dt * 1000).format('DD MMM')}
            </p>

            {/* Temp */}
            <h2 className="heading-5">
                {day.temp.day.toFixed(0)}° / {day.temp.night.toFixed(0)}°
            </h2>
            <Icon icon={weatherIcons[day.weather[0].main]} size="2.8rem" />

            {/* Info */}
            <Info data={day} isHovered={isHovered} />
        </article>
    );
};

export default DailyForecast;

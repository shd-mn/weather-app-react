import { useState } from 'react';
import moment from 'moment';
import Info from '../../components/common/Info';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
import styles from './hourlyForecast.module.scss';

const HourlyForecast = ({ hour, weather, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const currentDate = moment(weather.current.dt * 1000).date();

    return (
        <article
            className={`${styles['hourly-forecast']} ${
                moment(hour.dt * 1000).date() === currentDate + 1 &&
                styles.tomorrow
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Time */}
            <p className={styles.time}>
                {index === 0
                    ? 'Now'
                    : moment(hour.dt * 1000).format('kk:mm') === '24:00'
                    ? moment(hour.dt * 1000).format('DD/MMM')
                    : moment(hour.dt * 1000).format('kk:mm')}
            </p>

            {/* Temp */}
            <h2 className="heading-5">{hour.temp.toFixed(0)}° C</h2>

            
            <Icon icon={weatherIcons[hour.weather[0].main]} size="2.8rem" />

            {/* Info */}
            <Info data={hour} isHovered={isHovered} />
        </article>
    );
};

export default HourlyForecast;

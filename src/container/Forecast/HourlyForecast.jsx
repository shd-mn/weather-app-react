import moment from 'moment';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
import styles from './hourlyForecast.module.scss';
const HourlyForecast = ({ weather }) => {
    return (
        <>
            {weather.hourly.slice(0, 24).map((hour, index) => (
                <article key={hour.dt} className={styles['hourly-forecast']}>
                    <p className="time">
                        {index === 0
                            ? 'Now'
                            : moment(hour.dt * 1000).format('kk:mm') === '24:00'
                            ? moment(hour.dt * 1000).format('DD/MMM')
                            : moment(hour.dt * 1000).format('kk:mm')}
                    </p>
                    <h2 className="heading-5">{hour.temp.toFixed(0)}° C</h2>
                    <Icon icon={weatherIcons[hour.weather[0].main]} />
                    <p>{hour.wind_speed} m/s</p>
                    <h2 className={styles['forecast-desc']}>
                        Feels like {hour.feels_like.toFixed(0)}°C
                    </h2>
                </article>
            ))}
        </>
    );
};

export default HourlyForecast;

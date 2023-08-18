import moment from 'moment';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
import styles from './hourlyForecast.module.scss';
const HourlyForecast = ({ weather }) => {
    const currentDate = moment(weather.current.dt * 1000).date();

    return (
        <>
            {weather.hourly.slice(0, 24).map((hour, index) => (
                <article
                    key={hour.dt}
                    className={`${styles['hourly-forecast']} ${
                        moment(hour.dt * 1000).date() === currentDate + 1 &&
                        styles.tomorrow
                    }`}
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
                    
                    {/*  */}
                    <Icon
                        icon={weatherIcons[hour.weather[0].main]}
                        size="2.8rem"
                    />
                    {/* Info */}
                    <div className={styles['forecast-info']}>
                        <p className={styles['feels-like']}>
                            Feels like {hour.feels_like.toFixed(0)}°C
                        </p>

                        <p className={styles.info}>
                            <Icon icon="wind-speed" size="2.2rem" />
                            {hour.wind_speed} m/s
                        </p>

                        <p className={styles.info}>
                            <Icon icon="cloud" size="2.2rem" /> {hour.clouds} %
                        </p>

                        <p className={styles.info}>
                            <Icon icon="pressure" size="2.2rem" />
                            {hour.pressure} PS
                        </p>
                        <p className={styles.info}>
                            <Icon icon="humidity" size="2.2rem" />{' '}
                            {hour.humidity} %
                        </p>
                    </div>
                </article>
            ))}
        </>
    );
};

export default HourlyForecast;

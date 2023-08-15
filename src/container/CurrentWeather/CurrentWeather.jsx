import CityInfo from './CityInfo';
import WeatherInfo from './WeatherInfo';
import styles from './currentWeather.module.scss';
const CurrentWeather = () => {
    return (
        <section className={styles['current-weather']}>
            <CityInfo />
            <WeatherInfo />
        </section>
    );
};
export default CurrentWeather;

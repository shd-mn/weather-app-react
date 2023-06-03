import CityInfo from './CityInfo';
import WeatherInfo from './WeatherInfo';

const CurrentWeather = () => {
    return (
        <section className="current-weather">
            <CityInfo />
            <WeatherInfo />
        </section>
    );
};
export default CurrentWeather;

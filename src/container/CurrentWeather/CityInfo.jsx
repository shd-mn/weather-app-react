import { useSelector } from 'react-redux';
import Icon from '../../icons';
import { weatherIcons } from '../../data/weatherIcons';
import styles from './cityInfo.module.scss';

function CityInfo() {
    const { name } = useSelector((state) => state.location);
    const { weather, isLoading } = useSelector((state) => state);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    const {
        temp,
        weather: [{ main, description }],
    } = weather.current;

    return (
        <div className={styles['city-info']}>
            <Icon icon={weatherIcons[main]} />
            <p className="description">{description}</p>
            <h1 className="heading-primary">{temp} °C</h1>
            <h3 className="heading-4">{name}</h3>
        </div>
    );
}

export default CityInfo;

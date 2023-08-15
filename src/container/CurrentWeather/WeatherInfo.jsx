import { currentInfoData } from './data/currentInfoData';
// import moment from 'moment';
import { useSelector } from 'react-redux';
import styles from './weatherInfo.module.scss';

function WeatherInfo() {
    const { weather, isLoading } = useSelector((state) => state);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    const info = currentInfoData(weather.current);
    // const time = new Date(weather.current.dt * 1000);
    // console.log(moment(time).format('D MMM YYYY h:m'))

    return (
        <div className={styles['weather-info']}>
            {info.map((data) => (
                <div key={data.id} className={styles.info}>
                    {data.icon}
                    <div>
                        <p>{data.title}</p>
                        <h4 className="heading-4">
                            {data.value} {data.sign}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeatherInfo;

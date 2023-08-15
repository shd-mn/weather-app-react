import { useState } from 'react';
import { useSelector } from 'react-redux';
import ScrollContainer from 'react-indiana-drag-scroll';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import { Button } from '../../components/index';
import styles from './forecast.module.scss';

const Forecast = () => {
    const { weather, isLoading } = useSelector((state) => state);
    const [show, setShow] = useState(true);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <section className={styles.forecast}>
            <div className={styles['forecast-btn-group']}>
                <Button
                    className={`${show ? "" : styles.selected }`}
                    onClick={() => setShow(false)}
                >
                    8-day forecast
                </Button>
                <Button
                    className={`${show ? styles.selected : ''}`}
                    onClick={() => setShow(true)}
                >
                    48-hour forecast
                </Button>
            </div>

            <ScrollContainer className={styles['forecast-content']}>
                {show ? (
                    <HourlyForecast weather={weather} />
                ) : (
                    <DailyForecast weather={weather} />
                )}
            </ScrollContainer>
            {/* <div>
                <button type="button">prev</button>
                <button type="button">next</button>
            </div> */}
        </section>
    );
};

export default Forecast;

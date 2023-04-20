import React, { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useWeatherInfo } from '../../context/MainContext';
import DailyForecast from './DailyForecast';
import { Button } from '../../components/index';
import HourlyForecast from './HourlyForecast';

const Forecast = () => {
    const { weather } = useWeatherInfo();

    const [show, setShow] = useState(true);

    return (
        <>
            <div className="forecast-btn-group">
                <Button
                    className={show ? '' : 'selected'}
                    onClick={() => setShow(false)}
                >
                    8-day forecast
                </Button>
                <Button
                    className={show ? 'selected' : ''}
                    onClick={() => setShow(true)}
                >
                    48-hour forecast
                </Button>
            </div>

            <ScrollContainer className="forecast">
                {show ? (
                    <HourlyForecast weather={weather} />
                ) : (
                    <DailyForecast weather={weather} />
                )}
                <div>
                    <button type="button"></button>
                </div>
            </ScrollContainer>
        </>
    );
};

export default Forecast;

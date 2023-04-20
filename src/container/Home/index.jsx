import React from 'react';
import CityInfo from '../CityInfo';
import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';

function HomePage() {
    return (
        <main>
            <section className="container">
                <div className="current-info">
                    <CityInfo />
                    <CurrentWeather />
                </div>
                <Forecast />
            </section>
        </main>
    );
}

export default HomePage;

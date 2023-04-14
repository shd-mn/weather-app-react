import React from 'react';
import CityInfo from '../CityInfo';
import CurrentWeather from '../CurrentWeather';

function HomePage() {
    return (
        <main>
            <div className="container">
                <div className="current-info">
                    <CityInfo />
                    <CurrentWeather />
                </div>
                <div className='forecast'>
                    
                </div>
            </div>
        </main>
    );
}

export default HomePage;

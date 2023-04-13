import React from 'react';
import CityInfo from '../CityInfo';
import TodayInfo from '../TodayInfo';

function HomePage() {
    return (
        <main>
            <div className="container">
                <div className="current-weather">
                    <CityInfo />
                    <TodayInfo />
                </div>
                <div className='forecast'>
                    
                </div>
            </div>
        </main>
    );
}

export default HomePage;

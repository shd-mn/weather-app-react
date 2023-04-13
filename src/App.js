import React from 'react';
import { useWeatherInfo } from './context/MainContext';

import HomePage from './container/Home';
function App() {
    // const { weather } = useWeatherInfo();

    return (
        <>
            <HomePage />
        </>
    );
}

export default App;

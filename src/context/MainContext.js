import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MainContext = createContext();

const Provider = ({ children }) => {
    const [weather, setWeather] = useState();

    const [city, setCity] = useState();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const { latitude: lat } = position.coords;
                    const { longitude: lon } = position.coords;
                    axios(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c21bbcb42c128fbb65f728aca68a58f2&units=metric`
                    ).then((res) => setWeather(res.data));
                },
                function () {
                    alert(
                        'Could not get your position, you can select your city manually'
                    );
                }
            );
        }
    }, []);

    const onChangeHandle = (value) => {
        if (value.length > 2) {
            setTimeout(() => {
                axios(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=c21bbcb42c128fbb65f728aca68a58f2`
                ).then((res) => setCity(res.data));
            }, 500);
        }
    };

    const getLocation = (item) => {
        axios(
            `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=c21bbcb42c128fbb65f728aca68a58f2&units=metric`
        ).then((res) => setWeather(res.data));
    };

    const data = {
        weather,
        setWeather,
        city,
        setCity,
        getLocation,
        onChangeHandle
    };

    return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export const useWeatherInfo = () => useContext(MainContext);

export default Provider;

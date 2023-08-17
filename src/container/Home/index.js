import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    fetchLocation,
    fetchWeather,
    setAlert,
} from '../../redux/weatherSlice';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLocation({ lat: 40.4093, lon: 49.8671 }));
        dispatch(fetchWeather({ lat: 40.4093, lon: 49.8671 }));
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const { latitude: lat } = position.coords;
                    const { longitude: lon } = position.coords;

                    dispatch(fetchLocation({ lat, lon }));
                    dispatch(fetchWeather({ lat, lon }));
                },
                function () {
                    dispatch(
                        setAlert(
                            'Location access denied, please allow the site to access your location or manually search your location.'
                        )
                    );
                }
            );
        } else {
        }
    }, [dispatch]);

    return (
        <main>
            <div className="container">
                <CurrentWeather />
                <Forecast />
            </div>
        </main>
    );
}

export default HomePage;

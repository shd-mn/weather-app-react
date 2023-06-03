import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    fetchLocation,
    fetchWeather,
    setAlert,
} from '../../redux/weatherSlice';
import Alert from '../../components/Alert';
import CurrentWeather from '../CurrentWeather';
import Forecast from '../Forecast';

function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const { latitude: lat } = position.coords;
                    const { longitude: lon } = position.coords;

                    dispatch(fetchLocation({ lat, lon }));
                    dispatch(fetchWeather({ lat, lon }));
                },
                function () {
                    dispatch(setAlert());
                    dispatch(fetchLocation({ lat: 40.4093, lon: 49.8671 }));
                    dispatch(fetchWeather({ lat: 40.4093, lon: 49.8671 }));
                }
            );
        } else {
        }
    }, [dispatch]);

    return (
        <main>
            <div className="container">
                <Alert />
                <CurrentWeather />
                <Forecast />
            </div>
        </main>
    );
}

export default HomePage;

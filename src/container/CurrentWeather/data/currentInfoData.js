import Icon from '../../../icons';

export const currentInfoData = (weather) => {
    return [
        {
            id: 1,
            title: 'Humidty',
            value: weather.humidity,
            sign: '%',
            icon: <Icon icon="humidity" size={46} />,
        },
        {
            id: 2,
            title: 'Air Pressure',
            value: weather.pressure,
            sign: 'PS',
            icon: <Icon icon="pressure" size={46} />,
        },
        {
            id: 3,
            title: 'Clouds',
            value: weather.clouds,
            sign: '%',
            icon: <Icon icon="cloud" size={46} />,
        },
        {
            id: 4,
            title: 'Wind Speed',
            value: weather.wind_speed,
            sign: 'km/h',
            icon: <Icon icon="wind-speed" size={46} />,
        },
    ];
};

import Icon from '../../../icons'

export const todayInfoData = (weather) => {
    return [
        {
            id: 1,
            title: 'Humidty',
            value: weather.main.humidity,
            sign: '%',
            icon: <Icon icon="humidity" size={46} />,
        },
        {
            id: 2,
            title: 'Air Pressure',
            value: weather.main.pressure,
            sign: 'PS',
            icon: <Icon icon="pressure" size={46} />,
        },
        {
            id: 3,
            title: 'Clouds',
            value: weather.clouds.all,
            sign: '%',
            icon: <Icon icon="cloud" size={46} />,
        },
        {
            id: 4,
            title: 'Wind Speed',
            value: weather.wind.speed,
            sign: 'km/h',
            icon: <Icon icon="wind-speed" size={46} />,
        },
    ];
};

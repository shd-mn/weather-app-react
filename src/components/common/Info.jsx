import React from 'react';
import Icon from '../../icons';
import styles from './info.module.scss';

const Info = ({ data, isHovered }) => {
    return (
        <div
            className={`${styles['forecast-info']} ${isHovered && styles.show}`}
        >
            <p className={styles['feels-like']}>
                Feels like
                {data.feels_like.day
                    ? data.feels_like.day.toFixed(0)
                    : data.feels_like.toFixed(0)}
                °C
            </p>

            <p className={styles.info}>
                <Icon icon="wind-speed" size="2.2rem" />
                {data.wind_speed} m/s
            </p>

            <p className={styles.info}>
                <Icon icon="cloud" size="2.2rem" /> {data.clouds} %
            </p>

            <p className={styles.info}>
                <Icon icon="pressure" size="2.2rem" />
                {data.pressure} PS
            </p>
            <p className={styles.info}>
                <Icon icon="humidity" size="2.2rem" /> {data.humidity} %
            </p>
        </div>
    );
};

export default Info;

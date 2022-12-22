import React, { useRef } from 'react';
import { useWeatherInfo } from '../context/MainContext';
function ChangeLocation() {
    const { city, getLocation, onChangeHandle } = useWeatherInfo();
    const inputRef = useRef();

    const handleChangeLoc = (e) => {
        e.target.style.display = 'none';
        console.log(inputRef.current)
    };

    return (
        <div className="change-location">
            {city &&
                city.map((item, id) => (
                    <ul key={id}>
                        <li onClick={() => getLocation(item)}>
                            {item.name} - {item.country}
                        </li>
                    </ul>
                ))}

            <button type="button" onClick={(e) => handleChangeLoc(e)}>
                Change Location
            </button>

            <input
                ref={inputRef}
                className="search"
                type="search"
                onChange={(e) => onChangeHandle(e.target.value)}
                placeholder="search a city"
            />
        </div>
    );
}

export default ChangeLocation;

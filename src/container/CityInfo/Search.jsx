import React, { useRef } from 'react';
import { useWeatherInfo } from '../../context/MainContext';
import { Button, Form, Input } from '../../components';
function Search() {
    const { city, getLocation, onChangeHandle } = useWeatherInfo();
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.style.display = 'none';
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

            <Form>
                <Button onClick={handleSubmit}>Change Location</Button>
                <Input
                    // ref={inputRef}
                    className="search"
                    type="search"
                    // onChange={(e) => onChangeHandle(e.target.value)}
                    placeholder="search a city"
                />
            </Form>
        </div>
    );
}

export default Search;

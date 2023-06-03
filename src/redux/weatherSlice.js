import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    location: {},
    weather: [],
    isLoading: true,
    alert: '',
    error: '',
};

export const fetchLocation = createAsyncThunk(
    'fetchLocation/getLocation',
    async ({ lat = 49.8671, lon = 40.4093 }) => {
        console.log(lat, lon);
        const result = await axios(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        return result.data;
    }
);
export const fetchWeather = createAsyncThunk(
    'fetchWeather/getWeather',
    async ({ lat, lon }) => {
        const result = await axios(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );
        return result.data;
    }
);

export const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        setAlert: (state) => {
            state.alert =
                'Location access denied, please allow the site to access your location or manually search your location.';
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchLocation.fulfilled, (state, action) => {
                state.location = action.payload;
            })

            .addCase(fetchWeather.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.weather = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            });
    },
});

export const { setAlert } = weatherSlice.actions;
export default weatherSlice.reducer;

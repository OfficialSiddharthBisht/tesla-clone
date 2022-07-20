import {configureStore} from '@reduxjs/toolkit';
import carReducers from '../components/features/car/carSlice';

export const store = configureStore({
    reducer: {
        car : carReducers
    },
});
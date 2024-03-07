import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './cartSlice';

const store = configureStore({
    reducer: {
        cart: counterSlice,
    }
});

export default store;

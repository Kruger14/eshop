import { createSlice } from '@reduxjs/toolkit';

var initialState = {
    items: [], // array to store items in the cart
};

const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        Addtocart: (state, action) => {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        updateCart(state, action) {
            state.items = action.payload;
        },

        Remcart: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
        },
    },
});

export const { Addtocart, Remcart, updateCart } = counterSlice.actions;
export default counterSlice.reducer;

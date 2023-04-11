import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    games: [],
}

export const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWish: (state, action) => {
            const item = state.games.find(item => item.id === action.payload.id)
            if (!item) {
                state.games.push(action.payload)
            }
            else {
                console.log("already there")
            }
        },
        removeItem: (state, action) => {
            state.games = state.games.filter(item => item.id !== action.payload)
        },
        resetWishList: (state, action) => {
            state.games = []
        },
    },
})

export const { addToWish, removeItem, resetWishList } = wishSlice.actions;

export default wishSlice.reducer;
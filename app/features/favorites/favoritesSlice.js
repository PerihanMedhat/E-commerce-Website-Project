import { createSlice } from '@reduxjs/toolkit';
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.favorites.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.favorites.push(newItem);
            }

        },
        removeFromFavorites: (state, action) => {
            const itemId = action.payload;
            state.favorites = state.favorites.filter(item => item.id !== itemId);
        }
    }
});
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
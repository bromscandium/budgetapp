import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Theme} from '../domain/models/theme.model';

interface ThemeState {
    theme: Theme[];
}

const initialState: ThemeState = {
    theme: [],
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        fetchTheme(state, action: PayloadAction<Theme[]>) {
            state.theme = action.payload;
        },
    },
});


export const {fetchTheme} = themeSlice.actions;
export default themeSlice.reducer;

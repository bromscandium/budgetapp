import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Settings} from '../domain/models/settings.model';

interface SettingsState {
    settings: Settings[];
    selectedSettings: Settings | null;
}

const initialState: SettingsState = {
    settings: [],
    selectedSettings: null
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        fetchSettings(state, action: PayloadAction<Settings[]>) {
            state.settings = action.payload;
        },
        fetchUniqueSettings(state, action: PayloadAction<number>) {
            state.selectedSettings = state.settings.find(settings => settings.id === action.payload) ?? null;
        },
        updateSettings(state, action: PayloadAction<Settings>) {
            state.settings = state.settings.map(settings =>
                settings.id === action.payload.id ? action.payload : settings
            );
        },
    },
});


export const {fetchSettings, fetchUniqueSettings, updateSettings} = settingsSlice.actions;
export default settingsSlice.reducer;

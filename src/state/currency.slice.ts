import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Currency} from '../domain/models/currency.model';

interface CurrencyState {
    currency: Currency[];
}

const initialState: CurrencyState = {
    currency: [],
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        fetchCurrency(state, action: PayloadAction<Currency[]>) {
            state.currency = action.payload;
        },
    },
});


export const {fetchCurrency} = currencySlice.actions;
export default currencySlice.reducer;

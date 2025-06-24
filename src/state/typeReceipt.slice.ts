import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {typeReceipt} from '../domain/models/typeReceipt.model';

interface typeReceiptState {
    typeReceipt: typeReceipt[];
}

const initialState: typeReceiptState = {
    typeReceipt: [],
};

const typeReceiptSlice = createSlice({
    name: 'typeReceipt',
    initialState,
    reducers: {
        fetchTypeReceipt(state, action: PayloadAction<typeReceipt[]>) {
            state.typeReceipt = action.payload;
        },
    },
});


export const {fetchTypeReceipt} = typeReceiptSlice.actions;
export default typeReceiptSlice.reducer;

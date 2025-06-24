import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Receipt} from '../domain/models/receipt.model';

interface ReceiptState {
    receipts: Receipt[];
}

const initialState: ReceiptState = {
    receipts: [],
};

const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
        fetchReceipts(state, action: PayloadAction<Receipt[]>) {
            state.receipts = action.payload;
        },
        createNewReceipt(state, action: PayloadAction<Receipt>) {
            state.receipts.push(action.payload);
        },
        updateReceipt(state, action: PayloadAction<Receipt>) {
            state.receipts = state.receipts.map(receipt =>
                receipt.id === action.payload.id ? action.payload : receipt
            );
        },
        deleteReceipt(state, action: PayloadAction<number>) {
            state.receipts = state.receipts.filter(receipt =>
                receipt.id !== action.payload
            );
        },
    },
});


export const {fetchReceipts, createNewReceipt, updateReceipt, deleteReceipt} = receiptSlice.actions;
export default receiptSlice.reducer;

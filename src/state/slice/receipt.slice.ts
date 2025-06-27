import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Receipt} from '../../domain/models/receipt.model';
import {getAllReceipts} from '@/src/data/remote/receipt.api';

interface ReceiptState {
    receipts: Receipt[];
}

const initialState: ReceiptState = {
    receipts: [],
};

export const fetchReceiptsFromApi = createAsyncThunk<Receipt[]>(
    'receipt/fetchAll',
    async () => {
        const data = await getAllReceipts();
        return data;
    }
);


const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
        setReceipts(state, action: PayloadAction<Receipt[]>) {
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
    extraReducers: (builder) => {
        builder.addCase(fetchReceiptsFromApi.fulfilled, (state, action) => {
            state.receipts = action.payload;
        });
    },
});

export const {
    setReceipts,
    createNewReceipt,
    updateReceipt,
    deleteReceipt,
} = receiptSlice.actions;

export default receiptSlice.reducer;

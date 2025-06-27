import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PaymentType} from '../../domain/models/paymentType.model';

interface PaymentTypeState {
    paymentType: PaymentType[];
    selectedPaymentType: PaymentType | null;
}

const initialState: PaymentTypeState = {
    paymentType: [],
    selectedPaymentType: null
};

const paymentTypeSlice = createSlice({
    name: 'paymentType',
    initialState,
    reducers: {
        fetchPaymentType(state, action: PayloadAction<PaymentType[]>) {
            state.paymentType = action.payload;
        },
        fetchUniquePaymentType(state, action: PayloadAction<number>) {
            state.selectedPaymentType = state.paymentType.find(paymentType => paymentType.id === action.payload) ?? null;
        },
        createNewPaymentType(state, action: PayloadAction<PaymentType>) {
            state.paymentType.push(action.payload);
        },
        updatePaymentType(state, action: PayloadAction<PaymentType>) {
            state.paymentType = state.paymentType.map(paymentType =>
                paymentType.id === action.payload.id ? action.payload : paymentType
            );
        },
        deletePaymentType(state, action: PayloadAction<number>) {
            state.paymentType = state.paymentType.filter(paymentType =>
                paymentType.id !== action.payload
            );
        },
    },
});


export const {fetchPaymentType, fetchUniquePaymentType, createNewPaymentType, updatePaymentType, deletePaymentType} = paymentTypeSlice.actions;
export default paymentTypeSlice.reducer;

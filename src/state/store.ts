import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/category.slice';
import currencyReducer from './slice/currency.slice';
import receiptReducer from './slice/receipt.slice';
import settingsReducer from './slice/settings.slice';
import themeReducer from './slice/theme.slice';
import typeReceiptReducer from './slice/typeReceipt.slice';
import paymentTypeReducer from './slice/paymentType.slice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        currency: currencyReducer,
        receipt: receiptReducer,
        settings: settingsReducer,
        theme: themeReducer,
        typeReceipt: typeReceiptReducer,
        paymentType: paymentTypeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

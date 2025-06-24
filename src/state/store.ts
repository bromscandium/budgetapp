import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category.slice';
import currencyReducer from './currency.slice';
import receiptReducer from './receipt.slice';
import settingsReducer from './settings.slice';
import themeReducer from './theme.slice';
import typeReceiptReducer from './typeReceipt.slice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        currency: currencyReducer,
        receipt: receiptReducer,
        settings: settingsReducer,
        theme: themeReducer,
        typeReceipt: typeReceiptReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import * as MetaAPI from '../../data/remote/meta.api';
import { Theme } from '../models/theme.model';
import { typeReceipt } from '../models/typeReceipt.model';
import { Currency } from '../models/currency.model';

export const MetaRepository = {
    fetchThemes: async (): Promise<Theme[]> => {
        return MetaAPI.getThemes();
    },
    fetchTypeReceipts: async (): Promise<typeReceipt[]> => {
        return MetaAPI.getTypeReceipts();
    },
    fetchCurrencies: async (): Promise<Currency[]> => {
        return MetaAPI.getCurrencies();
    },
};

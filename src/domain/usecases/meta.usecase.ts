import { Theme } from '../models/theme.model';
import { typeReceipt } from '../models/typeReceipt.model';
import { Currency } from '../models/currency.model';
import { MetaRepository } from '../repositories/meta.repository';

export const fetchThemes = async (): Promise<Theme[]> => {
    return await MetaRepository.fetchThemes();
};

export const fetchTypeReceipts = async (): Promise<typeReceipt[]> => {
    return await MetaRepository.fetchTypeReceipts();
};

export const fetchCurrencies = async (): Promise<Currency[]> => {
    return await MetaRepository.fetchCurrencies();
};

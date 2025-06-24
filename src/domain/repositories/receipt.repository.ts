import * as ReceiptAPI from '../../data/remote/receipt.api';
import { Receipt } from '../models/receipt.model';

export const ReceiptRepository = {
    getAll: async (): Promise<Receipt[]> => {
        return ReceiptAPI.getAllReceipts();
    },
    create: async (data: Omit<Receipt, 'id'>): Promise<Receipt> => {
        return ReceiptAPI.createReceipt(data);
    },
    update: async (id: number, data: Partial<Receipt>): Promise<Receipt> => {
        return ReceiptAPI.updateReceipt(id, data);
    },
    delete: async (id: number): Promise<void> => {
        return ReceiptAPI.deleteReceipt(id);
    },
};

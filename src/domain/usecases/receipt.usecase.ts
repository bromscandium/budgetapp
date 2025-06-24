import { Receipt } from '../models/receipt.model';
import { ReceiptRepository } from '../repositories/receipt.repository';

export const fetchAllReceipts = async (): Promise<Receipt[]> => {
    return await ReceiptRepository.getAll();
};

export const addNewReceipt = async (data: Omit<Receipt, 'id'>): Promise<Receipt> => {
    return await ReceiptRepository.create(data);
};

export const modifyReceipt = async (id: number, data: Partial<Receipt>): Promise<Receipt> => {
    return await ReceiptRepository.update(id, data);
};

export const removeReceipt = async (id: number): Promise<void> => {
    return await ReceiptRepository.delete(id);
};

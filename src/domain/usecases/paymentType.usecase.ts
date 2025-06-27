import { PaymentType } from '../models/paymentType.model';
import { PaymentTypeRepository } from '../repositories/paymentType.repository';

export const fetchAllPaymentType = async (): Promise<PaymentType[]> => {
    return await PaymentTypeRepository.getAll();
};

export const fetchPaymentTypeById = async (id: number): Promise<PaymentType> => {
    return await PaymentTypeRepository.getById(id);
};

export const addNewPaymentType = async (data: Omit<PaymentType, 'id'>): Promise<PaymentType> => {
    return await PaymentTypeRepository.create(data);
};

export const modifyPaymentType = async (id: number, data: Partial<PaymentType>): Promise<PaymentType> => {
    return await PaymentTypeRepository.update(id, data);
};

export const removePaymentType = async (id: number): Promise<void> => {
    await PaymentTypeRepository.delete(id);
};

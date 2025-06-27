import * as PaymentTypeAPI from '../../data/remote/paymentType.api';
import {PaymentType} from '../models/paymentType.model';

export const PaymentTypeRepository = {
    getAll: async (): Promise<PaymentType[]> => {
        return PaymentTypeAPI.getAllPaymentType();
    },
    getById: async (id: number): Promise<PaymentType> => {
        return PaymentTypeAPI.getPaymentTypeById(id);
    },
    create: async (data: Omit<PaymentType, 'id'>): Promise<PaymentType> => {
        return PaymentTypeAPI.createPaymentType(data);
    },
    update: async (id: number, data: Partial<PaymentType>): Promise<PaymentType> => {
        return PaymentTypeAPI.updatePaymentType(id, data);
    },
    delete: async (id: number): Promise<void> => {
        return PaymentTypeAPI.deletePaymentType(id);
    },
};

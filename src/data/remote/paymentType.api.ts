import axios from 'axios';
import {PaymentType} from '../../domain/models/paymentType.model'
import {dotenv} from "@/src/utils/env";

const backendUrl: string = `http://${dotenv.LOCAL_HOTSPOT_PC}:${dotenv.FRONTEND_PORT}/api/payment`;

export const getAllPaymentType = async (): Promise<PaymentType[]> => {
    const res = await axios.get(backendUrl);
    return res.data;
};

export const getPaymentTypeById = async (id: number): Promise<PaymentType> => {
    const res = await axios.get(`${backendUrl}/${id}`);
    return res.data;
};

export const createPaymentType = async (data: Omit<PaymentType, 'id'>): Promise<PaymentType> => {
    const res = await axios.post(backendUrl, data);
    return res.data;
};

export const updatePaymentType = async (id: number, data: Partial<PaymentType>): Promise<PaymentType> => {
    const res = await axios.put(`${backendUrl}/${id}`, data);
    return res.data;
};

export const deletePaymentType = async (id: number): Promise<void> => {
    await axios.delete(`${backendUrl}/${id}`);
};
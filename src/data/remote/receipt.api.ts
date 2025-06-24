import axios from 'axios';
import { Receipt } from '../../domain/models/receipt.model';
import { env } from "@/backend/src/config/dotenv";

const backendUrl = `https://localhost:${env.BACKEND_PORT}/api/receipt`;

export const getAllReceipts = async (): Promise<Receipt[]> => {
    const res = await axios.get(backendUrl);
    return res.data;
};

export const createReceipt = async (data: Omit<Receipt, 'id'>): Promise<Receipt> => {
    const res = await axios.post(backendUrl, data);
    return res.data;
};

export const updateReceipt = async (id: number, data: Partial<Receipt>): Promise<Receipt> => {
    const res = await axios.put(`${backendUrl}/${id}`, data);
    return res.data;
};

export const deleteReceipt = async (id: number): Promise<void> => {
    await axios.delete(`${backendUrl}/${id}`);
};

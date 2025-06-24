import axios from 'axios';
import { Settings } from '../../domain/models/settings.model';
import { env } from "@/backend/src/config/dotenv";

const backendUrl = `https://localhost:${env.BACKEND_PORT}/api/settings`;

export const getAllSettings = async (): Promise<Settings[]> => {
    const res = await axios.get(backendUrl);
    return res.data;
};

export const getSettingsById = async (id: number): Promise<Settings> => {
    const res = await axios.get(`${backendUrl}/${id}`);
    return res.data;
};

export const updateSettings = async (id: number, data: Partial<Settings>): Promise<Settings> => {
    const res = await axios.put(`${backendUrl}/${id}`, data);
    return res.data;
};

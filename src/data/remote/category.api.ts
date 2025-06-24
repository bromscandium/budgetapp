import axios from 'axios';
import {Category} from '../../domain/models/category.model'
import {env} from "@/backend/src/config/dotenv";

const backendUrl: string = `https://localhost:${env.BACKEND_PORT}/api/category`;

export const getAllCategories = async (): Promise<Category[]> => {
    const res = await axios.get(backendUrl);
    return res.data;
};

export const getCategoryById = async (id: number): Promise<Category> => {
    const res = await axios.get(`${backendUrl}/${id}`);
    return res.data;
};

export const createCategory = async (data: Omit<Category, 'id'>): Promise<Category> => {
    const res = await axios.post(backendUrl, data);
    return res.data;
};

export const updateCategory = async (id: number, data: Partial<Category>): Promise<Category> => {
    const res = await axios.put(`${backendUrl}/${id}`, data);
    return res.data;
};

export const deleteCategory = async (id: number): Promise<void> => {
    await axios.delete(`${backendUrl}/${id}`);
};
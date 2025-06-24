import { Category } from '../models/category.model';
import { CategoryRepository } from '../repositories/category.repository';

export const fetchAllCategories = async (): Promise<Category[]> => {
    return await CategoryRepository.getAll();
};

export const fetchCategoryById = async (id: number): Promise<Category> => {
    return await CategoryRepository.getById(id);
};

export const addNewCategory = async (data: Omit<Category, 'id'>): Promise<Category> => {
    return await CategoryRepository.create(data);
};

export const modifyCategory = async (id: number, data: Partial<Category>): Promise<Category> => {
    return await CategoryRepository.update(id, data);
};

export const removeCategory = async (id: number): Promise<void> => {
    await CategoryRepository.delete(id);
};

import * as CategoryAPI from '../../data/remote/category.api';
import {Category} from '../models/category.model';

export const CategoryRepository = {
    getAll: async (): Promise<Category[]> => {
        return CategoryAPI.getAllCategories();
    },
    getById: async (id: number): Promise<Category> => {
        return CategoryAPI.getCategoryById(id);
    },
    create: async (data: Omit<Category, 'id'>): Promise<Category> => {
        return CategoryAPI.createCategory(data);
    },
    update: async (id: number, data: Partial<Category>): Promise<Category> => {
        return CategoryAPI.updateCategory(id, data);
    },
    delete: async (id: number): Promise<void> => {
        return CategoryAPI.deleteCategory(id);
    },
};

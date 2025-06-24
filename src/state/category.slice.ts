import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Category} from '../domain/models/category.model';

interface CategoryState {
    category: Category[];
    selectedCategory: Category | null;
}

const initialState: CategoryState = {
    category: [],
    selectedCategory: null
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchCategory(state, action: PayloadAction<Category[]>) {
            state.category = action.payload;
        },
        fetchUniqueCategory(state, action: PayloadAction<number>) {
            state.selectedCategory = state.category.find(category => category.id === action.payload) ?? null;
        },
        createNewCategory(state, action: PayloadAction<Category>) {
            state.category.push(action.payload);
        },
        updateCategory(state, action: PayloadAction<Category>) {
            state.category = state.category.map(category =>
                category.id === action.payload.id ? action.payload : category
            );
        },
        deleteCategory(state, action: PayloadAction<number>) {
            state.category = state.category.filter(category =>
                category.id !== action.payload
            );
        },
    },
});


export const {fetchCategory, fetchUniqueCategory, createNewCategory, updateCategory, deleteCategory} = categorySlice.actions;
export default categorySlice.reducer;

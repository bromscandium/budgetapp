import {Request, Response} from 'express'

import {getAllCategories, getUniqueCategory, createCategory, updateCategoryById, deleteCategoryById} from "../repositories/category.repositories"

export const fetchCategory = async (req: Request, res: Response) => {
    const data = await getAllCategories()
    res.json(data)
}

export const fetchUniqueCategory = async (req: Request, res: Response) => {
    const { id } = req.params
    const data = await getUniqueCategory(+id)
    res.json(data)
}


export const createNewCategory = async (req: Request, res: Response) => {
    const newCategory = await createCategory(req.body)
    res.status(201).json(newCategory)
}

export const updateCategory = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedCategory = await updateCategoryById(+id, req.body)
    res.json(updatedCategory)
}

export const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params
    await deleteCategoryById(+id)
    res.status(204).send()
}
import { Router } from 'express'
import {
    fetchCategory,
    createNewCategory,
    updateCategory,
    deleteCategory,
    fetchUniqueCategory
} from '../services/category.services'

const router = Router()

router.get('/', fetchCategory)

router.get('/:id', fetchUniqueCategory)

router.post('/', createNewCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

export default router
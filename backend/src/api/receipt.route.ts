import { Router } from 'express'
import { fetchReceipts, createNewReceipt, updateReceipt, deleteReceipt } from '../services/receipt.services'

const router = Router()

router.get('/', fetchReceipts)

router.post('/', createNewReceipt)

router.put('/:id', updateReceipt)

router.delete('/:id', deleteReceipt)

export default router
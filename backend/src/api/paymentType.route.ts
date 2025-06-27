import { Router } from 'express'
import {
    fetchPaymentType,
    createPaymentType,
    updatePaymentType,
    deletePaymentType,
    fetchUniquePaymentType
} from '../services/paymentType.services'


const router = Router()

router.get('/', fetchPaymentType)

router.get('/:id', fetchUniquePaymentType)

router.post('/', createPaymentType)

router.put('/:id', updatePaymentType)

router.delete('/:id', deletePaymentType)

export default router
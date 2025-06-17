import {Router} from 'express'
import {fetchTheme, fetchTypeReceipt, fetchCurrency} from '../services/meta.services'

const router = Router()

router.get('/theme', fetchTheme)

router.get('/receipt-types', fetchTypeReceipt)

router.get('/currency', fetchCurrency)


export default router
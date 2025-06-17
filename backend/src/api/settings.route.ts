import {Router} from 'express'
import {fetchSettings, fetchUniqueSettings, updateSettings} from '../services/settings.services'

const router = Router()

router.get('/', fetchSettings)

router.get('/:id', fetchUniqueSettings)

router.put('/:id', updateSettings)

export default router
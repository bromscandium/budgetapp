import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import receiptRouter from './api/receipt.route'
import categoryRouter from './api/category.route'
import settingsRouter from './api/settings.route'
import metaRouter from './api/meta.route'
import paymentTypeRouter from './api/paymentType.route'
import {corsConfig} from "./config/cors";
import {env} from "./config/dotenv";

dotenv.config()

const app = express()
const port = env.FRONTEND_PORT;

app.use(cors(corsConfig))
app.use(express.json())

app.use('/api/receipt', receiptRouter)
app.use('/api/category', categoryRouter)
app.use('/api/settings', settingsRouter)
app.use('/api/meta', metaRouter)
app.use('/api/payment', paymentTypeRouter)

app.get('/', (req, res) => {
    res.send('API is running')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
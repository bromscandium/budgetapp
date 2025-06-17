import {Request, Response} from 'express'

import {getAllThemes, getAllTypeReceipts, getAllCurrencies} from "../repositories/meta.repositories"

export const fetchTheme = async (req: Request, res: Response) => {
    const data = await getAllThemes()
    res.json(data)
}

export const fetchTypeReceipt = async (req: Request, res: Response) => {
    const data = await getAllTypeReceipts()
    res.json(data)
}

export const fetchCurrency = async (req: Request, res: Response) => {
    const data = await getAllCurrencies()
    res.json(data)
}


import {Request, Response} from 'express'

import {getAllReceipts, createReceipt, updateReceiptById, deleteReceiptById} from "../repositories/receipt.repositories"

export const fetchReceipts = async (req: Request, res: Response) => {
    const data = await getAllReceipts()
    res.json(data)
}

export const createNewReceipt = async (req: Request, res: Response) => {
    const newReceipt = await createReceipt(req.body)
    res.status(201).json(newReceipt)
}

export const updateReceipt = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedReceipt = await updateReceiptById(+id, req.body)
    res.json(updatedReceipt)
}

export const deleteReceipt = async (req: Request, res: Response) => {
    const { id } = req.params
    await deleteReceiptById(+id)
    res.status(204).send()
}
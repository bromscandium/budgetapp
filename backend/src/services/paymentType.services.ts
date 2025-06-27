import {Request, Response} from 'express'

import {getAllPaymentType, getUniquePaymentType, createNewPaymentType, updatePaymentTypeById, deletePaymentTypeById} from "../repositories/paymentType.repositories"


export const fetchPaymentType = async (req: Request, res: Response) => {
    const data = await getAllPaymentType()
    res.json(data)
}

export const fetchUniquePaymentType = async (req: Request, res: Response) => {
    const { id } = req.params
    const data = await getUniquePaymentType(+id)
    res.json(data)
}


export const createPaymentType = async (req: Request, res: Response) => {
    const newCategory = await createNewPaymentType(req.body)
    res.status(201).json(newCategory)
}

export const updatePaymentType = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedCategory = await updatePaymentTypeById(+id, req.body)
    res.json(updatedCategory)
}

export const deletePaymentType = async (req: Request, res: Response) => {
    const { id } = req.params
    await deletePaymentTypeById(+id)
    res.status(204).send()
}
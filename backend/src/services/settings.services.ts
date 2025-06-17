import {Request, Response} from 'express'

import {getAllSettings, getUniqueSettings, updateSettingsById} from "../repositories/settings.repositories"

export const fetchSettings = async (req: Request, res: Response) => {
    const data = await getAllSettings()
    res.json(data)
}

export const fetchUniqueSettings = async (req: Request, res: Response) => {
    const { id } = req.params
    const data = await getUniqueSettings(+id)
    res.json(data)
}


export const updateSettings = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedSettings = await updateSettingsById(+id, req.body)
    res.json(updatedSettings)
}

import { Settings } from '../models/settings.model';
import { SettingsRepository } from '../repositories/settings.repository';

export const fetchAllSettings = async (): Promise<Settings[]> => {
    return await SettingsRepository.getAll();
};

export const fetchSettingsById = async (id: number): Promise<Settings> => {
    return await SettingsRepository.getById(id);
};

export const modifySettings = async (id: number, data: Partial<Settings>): Promise<Settings> => {
    return await SettingsRepository.update(id, data);
};

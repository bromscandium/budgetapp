import * as SettingsAPI from '../../data/remote/settings.api';
import { Settings } from '../models/settings.model';

export const SettingsRepository = {
    getAll: async (): Promise<Settings[]> => {
        return SettingsAPI.getAllSettings();
    },
    getById: async (id: number): Promise<Settings> => {
        return SettingsAPI.getSettingsById(id);
    },
    update: async (id: number, data: Partial<Settings>): Promise<Settings> => {
        return SettingsAPI.updateSettings(id, data);
    },
};

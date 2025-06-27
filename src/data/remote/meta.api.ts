import axios from 'axios';
import { Theme } from '../../domain/models/theme.model';
import { typeReceipt } from '../../domain/models/typeReceipt.model';
import { Currency } from '../../domain/models/currency.model';

import {dotenv} from "@/src/utils/env";

const backendUrl: string = `http://${dotenv.LOCAL_HOTSPOT_PC}:${dotenv.FRONTEND_PORT}/api/meta`;

export const getThemes = async (): Promise<Theme[]> => {
    const res = await axios.get(`${backendUrl}/theme`);
    return res.data;
};

export const getTypeReceipts = async (): Promise<typeReceipt[]> => {
    const res = await axios.get(`${backendUrl}/receipt-types`);
    return res.data;
};

export const getCurrencies = async (): Promise<Currency[]> => {
    const res = await axios.get(`${backendUrl}/currency`);
    return res.data;
};

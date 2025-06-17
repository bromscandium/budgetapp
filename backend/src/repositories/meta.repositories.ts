import prisma from "../db/prisma";

export const getAllThemes = () => {
    return prisma.theme.findMany(
        {
            include: {
                settings: true
            }, orderBy: {
                id: 'desc'
            }
        }
    );
}

export const getAllTypeReceipts = () => {
    return prisma.receiptType.findMany(
        {
            include: {
                receipts: true
            }, orderBy: {
                id: 'desc'
            }
        }
    );
}

export const getAllCurrencies = () => {
    return prisma.currency.findMany(
        {
            include: {
                receipts: true,
                settings: true
            }, orderBy: {
                id: 'desc'
            }
        }
    );
}
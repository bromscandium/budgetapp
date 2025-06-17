import prisma from "../db/prisma";

export const getAllReceipts = () => {
    return prisma.receipt.findMany(
        {
            include: {
                category: true,
                currency: true,
                receiptType: true,
            },
            orderBy: {
                date: 'desc'
            }
        }
    )
}

export const createReceipt = (data: {
    title: string,
    amount: number,
    currencyId: number,
    categoryId: number,
    receiptTypeId: number,
    description?: string,

}) => {
    return prisma.receipt.create({data})
}

export const updateReceiptById = (
    id: number,
    data: Partial<{
        title: string,
        amount: number,
        currencyId: number,
        categoryId: number,
        receiptTypeId: number,
        description?: string,
    }>,
) => {
    return prisma.receipt.update({where: {id}, data})
}

export const deleteReceiptById = (id: number) => {
    return prisma.receipt.delete({where: {id}})
}


import prisma from "../db/prisma";

export const getAllPaymentType = () => {
    return prisma.category.findMany(
        {
            include: {
                receipts: true
            },
        }
    )
}

export const getUniquePaymentType = (id: number) => {
    return prisma.category.findUnique({
        where: {id},
        include: {receipts: true},
    })
}

export const createNewPaymentType = (data: { title: string, }) => {
    return prisma.category.create({data})
}

export const updatePaymentTypeById = (
    id: number,
    data: Partial<{ title: string }>,
) => {
    return prisma.category.update({where: {id}, data})
}

export const deletePaymentTypeById = (id: number) => {
    return prisma.category.delete({where: {id}})
}


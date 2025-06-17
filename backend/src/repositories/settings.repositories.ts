import prisma from "../db/prisma";

export const getAllSettings = () => {
    return prisma.settings.findMany(
        {
            include: {
                currency: true,
                theme: true
            },
            orderBy: {
                id: 'desc'
            }
        }
    )
}

export const getUniqueSettings = (id: number) => {
    return prisma.settings.findUnique({
        where: {id},
        include: {
            currency: true,
            theme: true
        },
    })
}

export const updateSettingsById = (
    id: number,
    data: Partial<{ language: string, themeId: number, currencyId: number }>,
) => {
    return prisma.category.update({where: {id}, data})
}


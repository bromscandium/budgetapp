import prisma from "../db/prisma";

export const getAllCategories = () => {
    return prisma.category.findMany(
        {
            include: {
                receipts: true
            },
        }
    )
}

export const getUniqueCategory = (id: number) => {
    return prisma.category.findUnique({
        where: {id},
        include: {receipts: true},
    })
}


export const createCategory = (data: { title: string, }) => {
    return prisma.category.create({data})
}

export const updateCategoryById = (
    id: number,
    data: Partial<{ title: string }>,
) => {
    return prisma.category.update({where: {id}, data})
}

export const deleteCategoryById = (id: number) => {
    return prisma.category.delete({where: {id}})
}


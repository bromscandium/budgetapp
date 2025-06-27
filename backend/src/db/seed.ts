import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.currency.createMany({
        data: [
            {id: 1, title: "EUR", rateToEur: 1},
            {id: 2, title: "USD", rateToEur: 0.93},
            {id: 3, title: "UAH", rateToEur: 0.023},
            {id: 4, title: "CZK", rateToEur: 0.040},
        ]
    })

    await prisma.category.createMany({
        data: [
            {id: 1, title: "Food"},
            {id: 2, title: "Transport"},
            {id: 3, title: "Job"},
            {id: 4, title: "Property"},
        ]
    })

    await prisma.paymentType.createMany({
        data: [
            {id: 1, title: "Cash", currencyId: 1},
            {id: 2, title: "Debet Card", currencyId: 1},
        ]
    })

    await prisma.receiptType.createMany({
        data: [
            {id: 1, title: "Buy"},
            {id: 2, title: "Get"},
            {id: 3, title: "Exchange"},
        ]
    })

    await prisma.theme.createMany({
        data: [
            {id: 1, title: "Light"},
            {id: 2, title: "Dark"},
        ]
    })

    await prisma.settings.createMany({
        data: [{
            id: 1, language: 'UA', themeId: 1, currencyId: 1
        }]
    })

    await prisma.receipt.createMany({
        data: [
            {
                title: "Groceries at Lidl",
                amount: 34.50,
                date: new Date("2025-06-20T10:00:00Z"),
                categoryId: 1,
                currencyId: 4,
                receiptTypeId: 1,
                paymentTypeId: 1
            },
            {
                title: "Metro pass top-up",
                amount: 20.00,
                date: new Date("2025-06-18T08:30:00Z"),
                categoryId: 2,
                currencyId: 1,
                receiptTypeId: 1,
                paymentTypeId: 1
            },
            {
                title: "Salary for June",
                amount: 1200.00,
                date: new Date("2025-06-15T09:00:00Z"),
                categoryId: 3,
                currencyId: 1,
                receiptTypeId: 2,
                paymentTypeId: 2
            },
            {
                title: "Sold old bike",
                amount: 85.00,
                date: new Date("2025-06-10T17:45:00Z"),
                categoryId: 4,
                currencyId: 3,
                receiptTypeId: 2,
                paymentTypeId: 2
            },
            {
                title: "Swapped headphones",
                amount: 60.00,
                date: new Date("2025-06-08T13:20:00Z"),
                categoryId: 4,
                currencyId: 2,
                receiptTypeId: 3,
                paymentTypeId: 1
            }
        ]
    })
}

main()
    .then(() => console.log('Added base seeds!'))
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
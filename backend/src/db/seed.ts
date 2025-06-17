import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    await prisma.currency.createMany({
        data: [
            {id: 1, title: "EUR"},
            {id: 2, title: "USD"},
            {id: 3, title: "UAH"},
            {id: 4, title: "CZK"},
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
            {id: 3, title: "Blue"},
            {id: 4, title: "Gold"},
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
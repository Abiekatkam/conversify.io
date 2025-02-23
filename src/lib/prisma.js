import { PrismaClient } from "@prisma/client";

// Declare prisma on global scope if not already defined
if (!global.prisma) {
    global.prisma = undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

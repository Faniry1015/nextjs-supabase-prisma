import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export const GET = async (request: Request, { params }: { params: { userId: string } }) => {
    const { userId } = params;
    const userData = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
    })
    console.log(userId) 
    return NextResponse.json({ userData }, {status: 200});
}
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

const POST = async (request: Request) => {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return NextResponse.json({ error: "L'utilisateur n'existe pas" }, { status: 400 });
    }

    if (user.password !== password) {
        return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 400 });
    }
    
    return NextResponse.json({ user }, { status: 201 });
};
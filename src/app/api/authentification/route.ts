import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: Request) : Promise<Response> => {
    try {
        const { email, password } = await request.json();
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ error: "L'utilisateur n'existe pas" }, { status: 400 });
        }

        if (user.password.toString() !== password.toString()) {
            return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 400 });
        }
        console.log(user)

        return NextResponse.json(user , { status: 201 });
    } catch (error) {
        console.error("POST /api/authentification:", error);
        return NextResponse.json({ error: "Internal server error 2" }, { status: 500 });
    }
};

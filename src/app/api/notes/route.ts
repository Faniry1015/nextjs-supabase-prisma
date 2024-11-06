import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

/**
 * Handles HTTP POST requests to /api/notes
 *
 * @param request - The incoming request.
 * @returns A JSON response with the created note or an error message.
 */
export async function POST(
    request: Request
): Promise<Response> {
    try {
        const { title, content } = (await request.json()) as {
            title: string;
            content: string;
        };

        if (!title || !content) {
            return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
        }

        const newNote = await prisma.note.create({
            data: {
                title,
                content,
            },
        });

        return NextResponse.json({ message: "ok", note: newNote }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 });
    }
}


export async function GET(
    request: Request
): Promise<Response> {
    try {
        const notes = await prisma.note.findMany();
        return NextResponse.json({ message: "ok", note: notes }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Une erreur est survenue' }, { status: 500 });
    }
}

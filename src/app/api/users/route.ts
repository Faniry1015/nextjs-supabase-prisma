import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Handles HTTP POST requests to /api/users
 *
 * @param request - The incoming request
 * @returns A JSON response with the created user
 */
async function POST(
    request: Request
): Promise<Response> {
    const { body } = await request.json();
    const user = await prisma.user.create({
        data: body,
    });
    return NextResponse.json({ user }, { status: 201 });
}

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

/**
 * Handles HTTP GET requests to /api/users/:userId
 *
 * @param {Request} request - The incoming request
 * @param {{ params: { userId: string } }} context - The route context
 * @returns {Promise<Response>} A JSON response with a single user
 */
export const GET = async (
    request: Request,
    { params }: { params: { userId: string } },
): Promise<Response> => {
    const { userId } = params;
    try {
        const userData = await prisma.user.findUnique({
            where: { id: parseInt(userId) },
        });
        if (!userData) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        return NextResponse.json({ userData }, { status: 200 });
    } catch (error) {
        console.error("GET /api/users/:userId:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

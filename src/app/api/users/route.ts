import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * Handles HTTP POST requests to /api/users
 *
 * @param request - The incoming request
 * @returns A JSON response with the created user
 */
export async function POST(
    request: Request
): Promise<Response> {
    const {name, email, role, city} = await request.json();
    console.log(name)
    const user = await prisma.user.create({
        data: {
            name,
            email,
            role,
            city,
        },
    });
    return NextResponse.json({ user }, { status: 201 });
}

/**
 * Handles HTTP GET requests to /api/users
 *
 * @param {Request} request - The incoming request
 * @returns {Promise<Response>} A JSON response with an array of users
 */
export async function GET(
    request: Request
): Promise<Response> {
    const users = await prisma.user.findMany()
    return NextResponse.json(users, { status: 200 })
}

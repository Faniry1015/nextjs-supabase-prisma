import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { noteId: string } }
): Promise<Response> {
  try {
    const note = await prisma.note.findUnique({
      where: { id: parseInt(params.noteId) },
    });
    return NextResponse.json({ message: "ok", note: note }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { noteId: string } }
): Promise<Response> {
  try {
    const note = await prisma.note.delete({
      where: { id: parseInt(params.noteId) },
    });
    return NextResponse.json({ message: "ok", note: note }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { noteId: string } }
) {
  try {
    const updatedInfo = await request.json();
    let updatedNote = await prisma.note.update({
      where: { id: parseInt(params.noteId) },
      data: {
        title: updatedInfo.title,
        content: updatedInfo.content,
      }
    });

    return NextResponse.json({ message: "ok", note: updatedNote}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

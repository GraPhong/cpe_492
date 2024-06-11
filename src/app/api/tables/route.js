import connectMongoDB from "@/libs/mongodb";
import Table from "@/models/table";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { courseNo, courseName, section, day, dayLab, time, timeLab, room, roomLab, examTime, teacher, color } = await request.json();
  await connectMongoDB();
  await Table.create({ courseNo, courseName, section, day, dayLab, time, timeLab, room, roomLab, examTime, teacher, color });
  return NextResponse.json({ message: "Table Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const tables = await Table.find();
  return NextResponse.json({ tables });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Table.findByIdAndDelete(id);
  return NextResponse.json({ message: "Table deleted" }, { status: 200 });
}

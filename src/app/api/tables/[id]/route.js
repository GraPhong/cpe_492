import connectMongoDB from "@/libs/mongodb";
import Table from "@/models/table";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const table = await Table.findOne({ _id: id });
  return NextResponse.json({ table }, { status: 200 });
}
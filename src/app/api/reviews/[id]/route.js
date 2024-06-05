import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Review from "@/models/review";

export async function PUT(request, { params }) {
  const { id } = params;
  const updateData = await request.json();
  
  await connectMongoDB();
  await Review.findByIdAndUpdate(id, updateData, { new: true });
  return NextResponse.json({ message: "Review updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const review = await Review.findOne({ _id: id });
  return NextResponse.json({ review }, { status: 200 });
}

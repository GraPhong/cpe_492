import connectMongoDB from "@/libs/mongodb";
import Review from "@/models/review";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { courseNo, courseName, review, score, like } = await request.json();
  await connectMongoDB();
  await Review.create({ courseNo, courseName, review, score, like });
  return NextResponse.json({ message: "Review Created" }, { status: 201 });
}

export async function GET(req) {
  await connectMongoDB();
  const { searchParams } = new URL(req.url);
  const courseNo = searchParams.get('courseNo');

  let reviews;
  if (courseNo) {
    reviews = await Review.find({ courseNo });
  } else {
    reviews = await Review.find();
  }

  return NextResponse.json({ reviews });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Review.findByIdAndDelete(id);
  return NextResponse.json({ message: "Review deleted" }, { status: 200 });
}

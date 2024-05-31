import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongoDB();
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  const keys = ["courseNo", "courseName"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q.toLowerCase()))
    );
  };

  const courses = await Course.find();
  const result = q ? search(courses).slice(0, 10) : courses.slice(0, 10);

  return NextResponse.json({ courses: result });
}


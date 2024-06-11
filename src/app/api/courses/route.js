import connectMongoDB from "@/libs/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectMongoDB();
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  const search = (data) => {
    const regex = new RegExp(`^${q}`, 'i');  // Regular expression to match from the beginning
    return data.filter((item) =>
      ["courseNo", "courseName"].some((key) => regex.test(item[key]))
    );
  };

  const courses = await Course.find();
  const result = q ? search(courses).slice(0, 10) : courses.slice(0, 10);

  return NextResponse.json({ courses: result });
}

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";


export default async function CourseTable(data) {
  const { courses } = data

  return (
    <>
      {courses.map((data) => (
        <div
          key={data._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{data.courseNo}</h2>
            <div>{data.courseName}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn  />
          </div>
        </div>
      ))}
    </>
  );
}
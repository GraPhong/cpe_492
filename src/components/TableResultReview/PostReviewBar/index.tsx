import Link from "next/link";
import React from "react";

export default function PostReviewBar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/review"}>
        มารีวิววิชากันเถอะ
      </Link>
      <Link className="bg-white p-2 font-bold" href={"/addReview"}>
        Add Review
      </Link>
    </nav>
  );
}
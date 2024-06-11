"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import React from "react";

export default function RemoveBtn({ id, onRemoveCourse }) {
  const router = useRouter();

  const removeTable = async () => {
    const confirmed = confirm("Are you sure to delete?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/tables?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          console.log("Table deleted successfully");
          onRemoveCourse(id); 
          router.refresh();
        } else {
          const errorData = await res.json();
          console.error("Failed to delete the table", errorData);
        }
      } catch (error) {
        console.error("An error occurred while deleting the table:", error);
      }
    }
  };

  return (
    <button onClick={removeTable} className="text-red-400">
      <HiOutlineTrash size={15} />
    </button>
  );
}

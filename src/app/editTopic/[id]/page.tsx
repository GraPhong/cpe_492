import EditTopicForm from "@/components/EditTopicForm";
import PostTopic from "@/components/TableReview/PostReview";
import TableReview from "@/components/TableReview/TableReview";

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div className='max-w-3xl mx-auto p-4'>
        <PostTopic/>
        <EditTopicForm id={id} title={title} description={description} />;
        <TableReview/>
    </div>
  )
}
// "use client";

const Comment = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = await params;
  return (
    <div>
      <h1>Comment {blogId}</h1>
    </div>
  );
};

export default Comment;

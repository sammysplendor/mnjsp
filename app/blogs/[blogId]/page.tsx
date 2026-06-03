export const generateMetadata = async ({
  params,
}: {
  params: { blogId: string };
}) => {
  const { blogId } = await params;

  return {
    title: `Blog ${blogId}`,
  };
};

const Blog = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = await params;

  return (
    <div className="flex flex-col gap-5">
      <h1>Blog {blogId}</h1>
    </div>
  );
};

export default Blog;

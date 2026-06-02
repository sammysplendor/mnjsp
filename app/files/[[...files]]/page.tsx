// "use client";

const File = async ({ params }: { params: { files: string[] } }) => {
  const { files } = await params;

  return (
    <div>
      <h1>Files: {files?.join("/")}</h1>
    </div>
  );
};

export default File;

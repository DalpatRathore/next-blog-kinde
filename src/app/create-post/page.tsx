import PostForm from "@/components/PostForm";

const CreatePostPage = () => {
  return (
    <main className="text-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-5">Create New Post</h1>
      <div className="">
        <PostForm></PostForm>
      </div>
    </main>
  );
};
export default CreatePostPage;

// import { createPost } from "@/actions/create-post";
import PostForm from "@/components/PostForm";

const CreatePostPage = () => {
  return (
    <main className="text-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-5">Create New Post</h1>
      <div className="">
        {/* <form action={createPost} className="max-w-sm mx-auto text-left">
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <div className="flex flex-col">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                name="title"
                id="title"
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Bonnie Green"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Content{" "}
              </label>

              <textarea
                id="content"
                name="content"
                className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white p-5"
                rows={6}
                placeholder="Enter content notes..."
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center my-5">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form> */}
        <PostForm></PostForm>
      </div>
    </main>
  );
};
export default CreatePostPage;

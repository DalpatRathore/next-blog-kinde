import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-5">Post Details:</h2>

      <div className="rounded-lg border border-gray-100 p-3 shadow-sm flex items-center justify-center h-40">
        <p className="italic">No post available for id</p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
          href={"/posts"}
        >
          <span className="font-medium transition-colors group-hover:text-white">
            Back to Posts
          </span>

          <span className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
const PostLoading = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-10">
      <h2 className="text-2xl font-semibold mb-5 text-gray-500">
        Post Details:
      </h2>
      <div role="status" className="space-y-5 animate-pulse max-w-5xl">
        <div className="flex items-center w-full">
          <div className="h-5 bg-gray-200 rounded-lg dark:bg-gray-700 w-32"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-24"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full max-w-[480px]">
          <div className="h-5 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full max-w-[400px]">
          <div className="h-5 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
          <div className="h-5 ms-2 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
        </div>
        <div className="flex items-center w-full max-w-[480px]">
          <div className="h-5 ms-2 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-24"></div>
        </div>
        <div className="flex items-center w-full max-w-[440px]">
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-32"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-24"></div>
          <div className="h-5 ms-2 bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
        </div>
        <div className="flex items-center w-full max-w-[360px]">
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
          <div className="h-5 ms-2 bg-gray-200 rounded-lg dark:bg-gray-700 w-80"></div>
          <div className="h-5 ms-2 bg-gray-300 rounded-lg dark:bg-gray-600 w-full"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          className="group flex items-center justify-between gap-4 rounded-lg border border-gray-200 px-5 py-3 text-gray-200"
          disabled
        >
          <span className="font-medium transition-colors">Back to Posts</span>

          <span className="shrink-0 rounded-lg border  bg-white p-2 ">
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
        </button>
      </div>
    </div>
  );
};
export default PostLoading;

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Undo2 } from "lucide-react";

const PostLoading = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-muted-foreground">
        Post Details
      </h2>

      <div className="flex flex-col space-y-3">
        <Skeleton className="h-52 w-full rounded-xl" />
        <div className="space-y-3">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button size={"lg"} variant={"outline"} disabled>
          Back to Posts <Undo2 className="w-5 h-5 ml-2 mb-1"></Undo2>
        </Button>
      </div>
    </div>
  );
};
export default PostLoading;

import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-5">
      <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-muted-foreground">
        Post Details
      </h2>
      <div className="relative">
        <Image
          alt=""
          width={500}
          height={250}
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="h-64 w-full object-cover sm:h-80 lg:h-96"
        />
        <p className="w-96 text-gray-900 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  py-10 px-8 backdrop-blur-xl">
          Post details not found!
        </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button asChild size={"lg"} variant={"outline"}>
          <Link href={"/posts"}>
            Back to Posts <Undo2 className="w-5 h-5 ml-2 mb-1"></Undo2>
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default NotFound;

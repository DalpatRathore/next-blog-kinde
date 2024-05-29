"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createPost } from "@/actions/create-post";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Please provide content.",
  }),
});

const PostForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createPost(values);
    // TODO: route to submitted post
    //  router.push(`/posts/${result.response.id}`);
    router.push("/posts");
  }
  return (
    <div className="max-w-xl mx-auto my-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Post title..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Post content..."
                    rows={6}
                    {...field}
                  ></Textarea>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {isSubmitting ? (
            <Button type="button" className="w-full max-w-xl italic" disabled>
              <Loader2 className="animate-spin w-4 h-4 mr-2"></Loader2>{" "}
              Submitting Post ...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full max-w-xl"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default PostForm;

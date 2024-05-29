"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { updatePost } from "@/actions/update-post";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Please provide content.",
  }),
});

type UpdatePostFormProps = {
  post: {
    id: number;
    title: string;
    content: string;
  };
};

const UpdatePostForm = ({ post }: UpdatePostFormProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await updatePost(post.id, values);
    router.refresh();
    router.push(`/posts/${post.id}`);
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
              <Loader2 className="animate-spin w-4 h-4 mr-2"></Loader2> Updating
              Post ...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full max-w-xl"
              disabled={isSubmitting}
            >
              Update
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default UpdatePostForm;

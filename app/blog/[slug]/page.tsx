import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "@/.contentlayer/generated";

import { Mdx } from "@/components/mdx";
import ClapsButton from "@/components/ui/ClapsButton";

type Props = {
  params: {
    slug: string;
  };
};

interface BlogPost {
  data: {
    readingTime: {
      text: string;
    };
  };
}

export async function generateMetadata({
  params,
}: {
  params: Props["params"];
}) {
  const post = allPosts.find((post: Post) => post.slug === params.slug) as Post;

  return {
    title: post.title,
    description: post.subtitle,
  };
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params, data }: any) {
  const post: Post = allPosts.find(
    (post: Post) => post.slug === params.slug
  ) as Post;

  if (!post) {
    notFound();
  }

  return (
    <section className=" font-quicksandd">
      <header className="space-y-8 text-center">
        {post.bannerUrl ? (
          <Image
            src={post.bannerUrl}
            alt={post.title}
            className="object-cover w-full transition-all rounded-lg h-30 mt-3 ring-1 dark:ring-white/10 ring-black/10"
            width={1200}
            height={400}
          />
        ) : null}
        <div className="space-x-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center space-x-2 text-black dark:text-black dark:text-white opacity-60">
              <span>{format(parseISO(post.date), "MMMM dd, yyyy")}</span>
              <span>&middot;</span>
              <span>{post.readingTime.text}</span>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <Balancer className="block mx-auto text-2xl md:w-11/12 text-black dark:text-black dark:text-white font-bold">
              {post.title}
            </Balancer>
          </div>
        </div>
      </header>
      <div className="w-full text-gray-500 dark:text-black dark:text-white mt-4 mb-10">
        <article>
          <Mdx code={post.body.code} />
        </article>
        {/* <div className="mt-10 flex justify-center dark:text-gray-800">
          <ClapsButton url={post.tweetUrl} />
        </div> */}
      </div>
    </section>
  );
}
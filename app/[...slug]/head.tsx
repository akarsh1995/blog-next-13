import { BlogSource } from "@/lib/mdx-sources";

interface PostHeadProps {
  params: {
    slug: string[];
  };
}

export default async function PostHead({ params }: PostHeadProps) {
  const post = await BlogSource.getMdxNode(params.slug);

  return (
    <>
      <title>
        {`Kfir's Blog | ${post?.frontmatter.title ?? "Post Not Found"}`}
      </title>
      <meta
        name="description"
        content={post?.frontmatter.excerpt ?? "Post not found"}
      />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  );
}

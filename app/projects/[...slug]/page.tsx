import { notFound } from 'next/navigation';
import { type Metadata } from 'next/types';

import { blogConfig } from '@/config';
import { Comments } from '@/components/comments';
import { MDXContent } from '@/components/mdx-content';
import { PostIntro } from '@/components/post-intro';
import { allProjects } from '@/.contentlayer/generated/index.mjs';

type ProjectPageProps = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams(): Promise<
  ProjectPageProps['params'][]
> {
  return allProjects.map(({ slug }) => ({
    slug: slug.split('/'),
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const { title, excerpt, url, date } = allProjects.find(
    ({ slug }) => slug === params.slug.join('/'),
  ) || {
    title: 'Project Not Found',
    excerpt: null,
    url: '/projects',
    date: new Date().toISOString(),
  };

  const ogImage = {
    url: `${blogConfig.url}/og?title=${title}&subtitle=${excerpt ?? ''}`,
  };

  const description = excerpt ?? 'Project Not Found';

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url: `${blogConfig.url}${url}`,
      title,
      description,
      publishedTime: date,
      images: [ogImage],
    },
    twitter: {
      title,
      description,
      images: ogImage,
      card: 'summary_large_image',
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find(({ slug }) => slug === params.slug.join('/'));

  if (!project) {
    notFound();
  }

  return (
    <article className="h-full px-8">
      <PostIntro title={project.title} date={project.date} tags={project.tags} />
      <MDXContent code={project.body.code} />
      <Comments />
    </article>
  );
}

import { type Metadata } from 'next/types';
import { allProjects } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { blogConfig } from '@/config';
import { PostPaginator } from '@/components/post-paginator';
import Link from 'next/link';

const { url, title, description } = blogConfig.pages.projects;

const ogImage = {
  url: `${blogConfig.url}/og?title=${title}`,
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: `${blogConfig.url}${url}`,
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    title,
    description,
    images: ogImage,
    card: 'summary_large_image',
  },
};

export default function PostsPage() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="h-full px-6 pb-12 sm:px-12">
      {projects.map(project => (<Link key={project.slug} href={project.url}>{project.title}</Link>))}
    </div>
  );
}

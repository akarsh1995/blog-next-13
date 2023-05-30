import { type Metadata } from 'next/types';
import { allProjects } from 'contentlayer/generated';
import { ProjectCard } from 'components/project-card';
import { compareDesc } from 'date-fns';

import { blogConfig } from '@/config';

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
    <div className="h-full space-y-5 px-6 pb-12 sm:px-12">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

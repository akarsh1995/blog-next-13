'use client';

import Link from 'next/link';
import { Project } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={project.url}
      className={cn(
        'group relative flex h-fit w-1/2',
        'transition-transform duration-300 ease-in-out hover:scale-[1.02]',
      )}
      aria-label={project.title}
    >
      <article
        className={cn(
          'flex h-fit w-full flex-col space-y-4 rounded',
          'relative z-10 m-0.5 py-3 pl-10 pr-6 shadow-lg hover:shadow-xl',
          'bg-slate-100/95 dark:bg-slate-600/90',
        )}
      >
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold leading-normal text-slate-800 dark:text-rose-50 sm:text-3xl">
            <Balancer>
              {project.title}
            </Balancer>
          </h2>
          <p className="text-slate-700 dark:text-rose-50">
            <Balancer>{project.excerpt}</Balancer>
          </p>
        </div>
      </article>
      <div
        className={cn(
          'absolute inset-0 z-20 my-auto h-[calc(100%_-_0.25rem)] w-4 rounded-l',
          'group-hover:animate-border group-focus:animate-border-fast',
          'bg-slate-700 dark:bg-rose-50',
        )}
      />
    </Link>
  );
}

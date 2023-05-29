import type { Project } from 'contentlayer/generated';
import type { Meta, StoryObj } from '@storybook/react';

import { ProjectCard } from '@/components/project-card';
import { Center, Padding } from './decorators';

const meta: Meta<typeof ProjectCard> = {
  title: 'Project Card',
  component: ProjectCard,
  decorators: [Center, Padding],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Normal: Story = {
  args: {
    project: {
      title: 'Example Project',
      excerpt: 'This is an example project.',
      date: '2022-01-01',
      tags: ['example', 'post', 'tags'],
      url: '/posts/example-post',
      slug: 'posts/example-post',
    } as Project,
  },
};

export const FreshPost: Story = {
  args: {
    project: {
      title: 'Example Post',
      excerpt: 'This is an example post.',
      date: new Date().toISOString(),
      tags: ['example', 'post', 'tags'],
      url: '/posts/example-post',
      slug: 'posts/example-post',
    } as Project,
  },
};

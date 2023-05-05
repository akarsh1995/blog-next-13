// @ts-check

/**
 * The blog's configuration. Start here after cloning the repo.
 * Hovering over the properties (in an editor like VSCode) will provide additional information about them.
 */

/** @type {import('./types').BlogConfig} */
const blogConfig = {
  url: 'https://akar.sh',
  title: '‹akarsh/blog›',
  titleParts: ['akarsh', 'blog'],
  author: 'Akarsh Jain',
  pages: {
    home: {
      title: 'Zero to One blog by Akarsh',
      description:
        "You want to know more about 10x development. Do check out my blog.",
    },
    posts: {
      url: '/posts',
      title: 'Posts',
      description:
        "All my blog posts. I write about Web Development and other topics I'm interested in.",
    },
  },
  theme: {
    accentColor: {
      light: '#be123c',
      dark: '#fda4af',
    },
    codeBlockTheme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  giscus: {
    repo: 'akarsh1995/blog-next-13',
    repoId: 'R_kgDOJfL4Lg',
    category: 'Comments',
    categoryId: 'DIC_kwDOIcM7JM4CTdK0',
    mapping: 'title',
    theme: {
      light: 'light',
      dark: 'dark_dimmed',
    },
  },
  footerLinks: {
    // twitter: 'https://twitter.com/kp2c',
    github: 'https://github.com/akarsh1995',
    linkedin: 'https://www.linkedin.com/in/akarsh1995',
    email: 'akarsh.1995.02@gmail.com',
    // buyMeAPizza: 'https://buymeacoffee.com/kfirfitousi',
    // storybook: 'https://story.blog.kfirfitousi.com',
  },
  topics: [
    'Web Development',
    'React',
    'TypeScript',
    'Next.js',
    'Rust',
    'Computer Vision',
    'Python',
  ],
};

module.exports = { blogConfig };

export const markdown = (repoStars: {
	leetcodeGraphQL: number;
	hackintosh: number;
	leetcodeTUI: number;
}) => `
## Me 

Hi, I'm Akarsh. Together with my wife and my yet to welcome kid, we live in Bhopal, India.  

I love to program, read about science and tech and spend money on things that improve quality of life.

I also build keyboards by designing PCBs, sourcing components and getting stuff 3-d printed. Hope you'd love to have [this](https://github.com/akarsh1995/zmk-config-corne-xiao-ble) on your desk.

I enjoy passing on the experience I gained particularly to interns or the folks who are going through initial stage of their career.

I work remotely for [DEFX PTE, Singapore](https://app.defx.com/), in a team of eight engineers distributed across the globe.

## Projects
- [LeetCode Terminal User Interface (Rust)](https://github.com/akarsh1995/leetcode-tui) (⭐️ ${repoStars.leetcodeTUI})
  - I'm fond of minimalist terminal applications that have a low memory footprint and are fast. Couldn't find any application that would let me solve LeetCode problems in terminal, so I built one.
- [LeetCode GraphQL API Collection](https://github.com/akarsh1995/leetcode-graphql-queries) (️️⭐ ${repoStars.leetcodeGraphQL})
  - Opensourced the GraphQL queries I use in my LeetCode TUI. This is a collection of queries that can be used to fetch problems, contests, submissions, and more from LeetCode's GraphQL API.
- [Hackintosh](https://github.com/akarsh1995/ASUS-TUF-Gaming-B460-Plus-i5-10400-Opencore-Hackintosh-Build) (⭐ ${repoStars.hackintosh})
  - Lost my MacBook Pro to the screen flickering issue. Built a Hackintosh with an ASUS TUF Gaming B460 Plus motherboard and an Intel i5-10400 CPU. This is a guide to help you build your own Hackintosh with the same hardware.
---

### Quality of Life Utilities

*I have a few more command line utility functions that came out right after loosing my files that I had not backed up. I vibecoded them up and put them on GitHub. I don't trust the cloud storage so use my own encryption utilities.*

- [fish-pwstore](https://github.com/akarsh1995/fish-pwstore)
  - Tried using [pass](https://www.passwordstore.org/) to store my passwords but it was too complex for my needs. So built one that does not leave filesystem footprint.
- [fish-secretstore](https://github.com/akarsh1995/fish-secretstore) 
  - A few environment variables that you cannot commit to your repository unencrypted, like API keys, database passwords, etc. This utility helps you encrypt secrets in a simple way and loads them in runtime.
- [fish-filecrypt](https://github.com/akarsh1995/fish-filecrypt)
  - A simple utility that gives you ability to backup your secret files to version control and restore them when needed to the same path.
`;

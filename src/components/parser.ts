import rehypeExternalLinks from "rehype-external-links";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

export const parser = unified()
	.use(remarkParse)
	.use(remarkRehype)
	.use(rehypeExternalLinks, { rel: ["nofollow"], target: "_blank" })
	.use(rehypeStringify);

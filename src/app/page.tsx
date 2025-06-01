import { parser } from "../components/parser";
import { getRepoStars } from "../utils/utils";
import { markdown as getLandingPageMarkdown } from "./data";

export default async function HomePage() {
	const isProd = process.env.NODE_ENV !== "development";

	let stars = [9, 99, 999];

	if (isProd) {
		stars = await Promise.all([
			getRepoStars("akarsh1995", "leetcode-graphql-queries"),
			getRepoStars(
				"akarsh1995",
				"ASUS-TUF-Gaming-B460-Plus-i5-10400-Opencore-Hackintosh-Build",
			),
			getRepoStars("akarsh1995", "leetcode-tui"),
		]);
	}

	const html = String(
		await parser.process(
			getLandingPageMarkdown({
				leetcodeGraphQL: stars[0],
				hackintosh: stars[1],
				leetcodeTUI: stars[2],
			}),
		),
	);

	return <div className="post" dangerouslySetInnerHTML={{ __html: html }} />;
}

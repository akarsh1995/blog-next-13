export async function getRepoStars(owner: string, repo: string) {
	const url = `https://api.github.com/repos/${owner}/${repo}`;
	try {
		const response = await fetch(url, {
			headers: {
				Accept: "application/vnd.github+json",
			},
		});
		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status}`);
		}
		const data = await response.json();
		return data.stargazers_count;
	} catch (error) {
		console.error(error);
		return null;
	}
}

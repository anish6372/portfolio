export async function fetchGitHubRepos(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 }, // ISR: revalidate every hour
      }
    );

    if (!res.ok) return null;

    const repos = await res.json();

    return repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        updatedAt: repo.updated_at,
      }));
  } catch {
    return null;
  }
}

export async function fetchGitHubUser(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const user = await res.json();
    return {
      login: user.login,
      name: user.name,
      bio: user.bio,
      publicRepos: user.public_repos,
      followers: user.followers,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
    };
  } catch {
    return null;
  }
}

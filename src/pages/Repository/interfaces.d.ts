export interface RepositoryParams {
  repository: string;
}

export interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export interface Issue {
  title: string;
  id: number;
  user: {
    login: string;
  };
  html_url: string;
}

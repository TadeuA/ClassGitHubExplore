import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import { GitHub } from '../../services/api';

import logoImg from '../../assets/explorer.svg';
import { RepositoryParams, Repository as Repo, Issue } from './interfaces';

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repo | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const response = await Promise.all([
        GitHub.get(`repos/${params.repository}`),
        GitHub.get(`repos/${params.repository}/issues`),
      ]);
      const repo = response[0].data;
      const issue = response[1].data;
      setRepository(repo);
      setIssues(issue);
    }
    loadData();
  }, [params.repository]);
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target="__blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={16} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;

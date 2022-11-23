
import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';

const getIssues = async () => {
  const { data } = await githubApi.get('/issues',
    {
      headers: {
        Authorization: null
      }
    });
  return data;
};

export default function useIssueList() {
  const issuesQuery = useQuery(['Issues'], getIssues);

  return issuesQuery;
}

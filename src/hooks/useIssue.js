
import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';

const getIssueInfo = async (issueNumber) => {
  const { data } = await githubApi.get(`/issues/${issueNumber}`,
    {
      headers: {
        Authorization: null
      }
    });
  return data;
};

export default function useIssue(issueNumber) {
  const issueQuery = useQuery(
    ['Issue', issueNumber],
    () => getIssueInfo(issueNumber )
  );

  return issueQuery;
}

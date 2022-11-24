
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

const getIssueComments = async (issueNumber) => {
  const { data } = await githubApi.get(`/issues/${issueNumber}/comments`,
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
    () => getIssueInfo(issueNumber),
  );

  const issueCommentsQuery = useQuery(
    ['Issue', issueNumber, 'Comments'],
    () => getIssueComments(issueNumber),
    {
      enabled: issueQuery.data !== undefined,
    }
  );
  return {
    issueQuery,
    issueCommentsQuery
  };
}

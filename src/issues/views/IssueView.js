import { Link, Navigate, useParams } from 'react-router-dom';

import LoadingIcon from '../../shared/components/LoadingIcon';
import { IssueComment } from '../components/IssueComment';

import useIssue from '../../hooks/useIssue';


export const IssueView = () => {

  const params = useParams();
  const { id = '0' } = params;

  const { issueQuery: issue, issueCommentsQuery } = useIssue(id);

  if (issue.isLoading)
    return (<LoadingIcon />)

  if (!issue.data)
    return (<Navigate to='./issues/list' />)


  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to='./issues/list'>Go Back</Link>
      </div>


      {/* Primer comentario */}
      <IssueComment issue={issue.data} />


      {/* Comentario de otros */}
      {issueCommentsQuery.data?.map((issue) => (
        <IssueComment issue={issue} key={issue.id} />
      ))}

    </div>
  )
}
import { useState } from 'react';

import LoadingIcon from '../../shared/components/LoadingIcon';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';

import useIssueList from '../../hooks/useIssueList';

export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState([]);
  const { issuesQuery } = useIssueList();

  const onLabelChanged = (labelName) => {
    (selectedLabels.includes(labelName))
      ? setSelectedLabels(selectedLabels.filter((label) => label !== labelName))
      : setSelectedLabels([...selectedLabels, labelName])
  };

  return (
    <div className="row mt-5">

      <div className="col-8">
        {issuesQuery.isLoading
          ? (<LoadingIcon />)
          : (<IssueList issues={issuesQuery.data} />)
        }
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabels={selectedLabels}
          onChange={(labelName) => onLabelChanged(labelName)}
        />
      </div>
    </div>
  )
}
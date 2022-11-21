import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";

const getLabels = async () => {
  const { data } = await githubApi.get('/labels');
  console.log(data);
  return data;
};

export const LabelPicker = () => {

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    // false is equal to avoid refecth data when the user on focus the window each timess
    {
      refetchOnWindowFocus: false
    }
  );

  return (
    <div>
      <span
        className="badge rounded-pill m-1 label-picker"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </div>
  )
}
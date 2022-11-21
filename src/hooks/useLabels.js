

import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";

const getLabels = async () => {
  const { data } = await githubApi.get('/labels');
  return data;
};

export default function useLabels() {

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    // false is equal to avoid refecth data when the user on focus the window each timess
    {
      refetchOnWindowFocus: false
    }
  );
  return labelsQuery;
}



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
    // staleTimne: is to set the time to refetch the petition
    // placeHolderData: is to show data meanwhile make the request to the server
    {
      refetchOnWindowFocus: false,
      // staleTime: 1000 * 60 * 60,
      placeholderData: [{
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: null,
      }]
    }
  );
  return labelsQuery;
}

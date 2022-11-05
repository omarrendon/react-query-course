import { useQuery } from "@tanstack/react-query";

const getRandomNumberFromAPI = async () => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await response.text();
  return +numberString;
};

export const useRandom = () => {
  const query = useQuery(['randomNumber'], getRandomNumberFromAPI);

  return query;
}


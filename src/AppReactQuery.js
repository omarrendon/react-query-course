import { useQuery } from '@tanstack/react-query';

import './App.css';

const getRandomNumberFromAPI = async () => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await response.text();
  return +numberString;
};

export default function AppReactQuery() {
  const query = useQuery(['randomNumber'], getRandomNumberFromAPI);

  console.log({query});

  return (
    <div className="App App-header">
      {query.isLoading
        ? (<h1>Cargando ...</h1>)
        : (<h2>Número aleatorio : {query.data}</h2>)
      }
      {!query.isLoading && query.isError && <h3>{query.error}</h3>}

      <button
        onClick={() => query.refetch()}
      >
        {query.isLoading ? '.....' : 'Refecth'}
      </button>
    </div>
  );
}

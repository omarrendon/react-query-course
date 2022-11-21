import './App.css';
import { useRandom } from './hooks/useRandom';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient();

export default function AppReactQuery() {
  const query = useRandom();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App App-header">
        {query.isFetching
          ? (<h1>Cargando ...</h1>)
          : (<h2>Número aleatorio : {query.data}</h2>)
        }
        {!query.isLoading && query.isError && <h3>{query.error}</h3>}
        <button
          onClick={() => query.refetch()}
        >
          {query.isFetching ? '.....' : 'Refecth'}
        </button>
      </div>
    </QueryClientProvider>
  );
}

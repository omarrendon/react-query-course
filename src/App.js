import { useEffect, useReducer, useState } from 'react';

import './App.css';

const getRandomNumberFromAPI = async () => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const numberString = await response.text();
  console.log({ numberString });

  return +numberString;
};

function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState('');
  const [key, forceRefecth] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setisLoading(true);
    getRandomNumberFromAPI()
      .then(num => setNumber(num))
      .catch(error => setError(error.message));
  }, [key]);

  useEffect(() => {
    if (number) setisLoading(false);
  }, [number]);

  useEffect(() => {
    if (error) setisLoading(false);
  }, [error]);

  return (
    <div className="App App-header">
      {isLoading
        ? (<h1>Cargando ...</h1>)
        : (<h2>Número aleatorio : {number}</h2>)
      }
      {!isLoading && error && <h3>error</h3>}

      <button
        onClick={forceRefecth}
      >
        {isLoading ? '.....' : 'Refecth'}
      </button>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'

type Joke = {
  category: string;
  joke: string;
};

const App = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((joke) => setJoke({category: joke.category, joke: joke.joke}))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  if (!joke) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h1>JOKES</h1>
        <div>
          <p>{joke.category}</p>
          <p>{joke.joke}</p>
        </div>
      </div>
    </>
  )
}

export default App
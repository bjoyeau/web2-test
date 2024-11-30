import { useEffect, useState } from 'react'
import './App.css'

type Joke = {
  category: string;
  joke: string;
};

const App = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {

      // Code original pour afficher une blague
      fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((joke) => setJoke({category: joke.category, joke: joke.joke}));
      // Fin du code original
      
    }, 10000);
    return () => clearInterval(interval);
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

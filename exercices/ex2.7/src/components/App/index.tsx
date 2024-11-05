import reactLogo from '/src/assets/react.svg';
import viteLogo from '/vite.svg';
import Movie from '../Movie';

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mes Films Préférés</h1>
      <Movie/>
    </>
  );
}

export default App;

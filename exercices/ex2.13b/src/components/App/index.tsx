import { useState } from "react";
import "./App.css";
import RandomDog from "../Dogs/RandomDog";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <div>
        <h1>DOGS</h1>

        <div>
          <RandomDog key={`${refresh}1`} />
          <RandomDog key={`${refresh}2`} />
          <RandomDog key={`${refresh}3`} />
        </div>

        <div>

          <button onClick={() => setRefresh(!refresh)}>
            Refresh
          </button>

        </div>
      </div>
    </>
  );
};

export default App;

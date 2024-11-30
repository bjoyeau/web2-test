import { useEffect, useState } from "react";
import "./App.css";
import RandomDog from "../Dogs/RandomDog";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setRefresh(!refresh);
    }, 5000);
    
    return () => clearInterval(interval); 
  }, [refresh]);

  return (
    <>
      <div>
        <h1>DOGS</h1>

        <div>
          <RandomDog key={`${refresh}1`} />
          <RandomDog key={`${refresh}2`} />
          <RandomDog key={`${refresh}3`} />
        </div>

      </div>
    </>
  );
};

export default App;

// CHATGPT


import UserCard from "./components/UserCard";
import "./components/UserCard.css";

function App() {
  return (
    <div className="App">
      <UserCard name="Alice" age={25} isOnline={true} />
      <UserCard name="Bob" age={30} isOnline={false} />
      <UserCard name="Charlie" age={35} isOnline={true} />
    </div>
  );
}

export default App;

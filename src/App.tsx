import "./App.css";
import { Parent } from "./components/Parent";
import { UsersList } from "./components/Users/UsersList";

function App() {
  return (
    <>
      <UsersList />

      <Parent>
        <h1>Title</h1>
        <button type="button">Btn</button>
      </Parent>
    </>
  );
}

export default App;

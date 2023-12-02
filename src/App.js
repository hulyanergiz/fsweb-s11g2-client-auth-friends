import { Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import FriendsList from "./pages/FriendsList";

function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/friends">
        <FriendsList />
      </Route>
    </div>
  );
}

export default App;

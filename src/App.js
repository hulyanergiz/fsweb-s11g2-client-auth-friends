import { Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import FriendsList from "./pages/FriendsList";
import AddFriend from "./pages/AddFriend";

function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/friends">
        <FriendsList />
      </Route>
      <Route path="/friends/add">
        <AddFriend />
      </Route>
    </div>
  );
}

export default App;

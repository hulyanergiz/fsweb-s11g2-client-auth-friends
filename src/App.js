import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import FriendsList from "./pages/FriendsList";
import AddFriend from "./pages/AddFriend";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route path="/friends/add">
          <AddFriend />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

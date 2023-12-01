import { Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <h1>Client Auth Projesi: Friends</h1>
      <Route path="/">
        <Login />
      </Route>
    </div>
  );
}

export default App;

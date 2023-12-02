import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavigationBar = () => {
  const { auth, isLoggedIn, logout } = useAuth();
  const history = useHistory();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>FRIENDS DATABASE</h1>
          {isLoggedIn() && <div>HI {auth.username.toUpperCase()}</div>}
        </div>
        <div className="menu">
          {!isLoggedIn() && (
            <button onClick={() => history.push("/login")}>LOGIN</button>
          )}
          {isLoggedIn() && (
            <>
              <button onClick={() => history.push("/friends/")}>
                FRIENDLIST
              </button>
              <button onClick={() => history.push("/friends/add")}>
                ADDFRIEND
              </button>
              <button onClick={logout}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default NavigationBar;

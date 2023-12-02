import { useHistory } from "react-router-dom";

const NavigationBar = () => {
  const history = useHistory();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="menu">
          <button onClick={() => history.push("/login")}>LOGIN</button>
          <button onClick={() => history.push("/friends/")}>FRIENDLIST</button>
          <button onClick={() => history.push("/friends/add")}>
            ADDFRIEND
          </button>
          <button>LOGOUT</button>
        </div>
      </div>
    </header>
  );
};
export default NavigationBar;

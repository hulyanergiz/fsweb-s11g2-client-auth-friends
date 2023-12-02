import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "workintech", password: "wecandoit" },
  });
  const history = useHistory();
  const submitHandler = (data) => {
    console.log("sent data", data);
    axios
      .post("http://localhost:9000/api/login", data)
      .then(function (response) {
        console.log("received data", response);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        history.push("/friends");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <h2>LOGIN</h2>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="inputs">
            <label htmlFor="username">USERNAME</label>
            <input
              id="username"
              type="text"
              placeholder="workintech"
              {...register("username", {
                required: "This field is required",
              })}
            ></input>
          </div>
          <div className="inputs">
            <label htmlFor="password">PASSWORD </label>
            <input
              id="password"
              type="text"
              placeholder="wecandoit"
              {...register("password", {
                required: "This field is required",
              })}
            ></input>
          </div>
          <button className="submit-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;

import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "workintech", password: "wecandoit" },
  });
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>LOGIN</h2>
      <div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="inputs">
            <label>
              USERNAME
              <input
                id="username"
                type="text"
                placeholder="workintech"
                {...register("username", {
                  required: "This field is required",
                })}
              ></input>
            </label>
          </div>
          <div className="inputs">
            <label>
              PASSWORD
              <input
                id="password"
                type="text"
                placeholder="wecandoit"
                {...register("password", {
                  required: "This field is required",
                })}
              ></input>
            </label>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};
export default Login;

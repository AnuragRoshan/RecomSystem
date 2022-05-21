import React  from "react";
import Axios from "axios";
import { useState } from "react";
// import { userContext } from "../App";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  // const navigate = useNavigate();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const { state, dispatch } = useContext(userContext);
  // console.log(state);
  const login = async () => {
    await Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) =>{ 
      console.log(res);
      // if (res.data.user) {
      //   // dispatch({ type: "user", payload: res.data.user.username });
      //   navigate("/");
      // } else {
      //   console.log("error while logging in");
      }
    );

    return (
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
    );
  };
};
export default Login;

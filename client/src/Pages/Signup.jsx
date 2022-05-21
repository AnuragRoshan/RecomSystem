import React from 'react'
import Axios from 'axios';
import { useState } from 'react';



function Signup() {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");

    const register = () => {
        Axios({
          method: "POST",
          data: {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
      };

  return (
    <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>
  )
}

export default Signup
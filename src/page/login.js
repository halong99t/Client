import React, { useState } from "react";
import { login } from "../api/service";
import { useHistory } from "react-router-dom";
import { setItem } from "../utils/localStorage";

export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const token = await login({ email, password });
          console.log(token);
          history.push("/home-page");

          if (token) {
            try {
              // await setItem("token", token);
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { register } from "../api/service";

export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const user = await register({ email, password, name });
          if (user) {
            alert("registered");
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
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  console.log(history);
  async function checkLogin() {
    const token = (await localStorage.getItem("token")) || null;
    console.log(token);
    if (!token) {
      history.push("/login");
    }
    if (token) {
      history.push("/home-page");
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return <div>"loading..."</div>;
}

export default Home;

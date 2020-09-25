import axios from "./axios";

const login = async ({ password, email }) => {
  try {
    const result = await axios.post("/login", {
      password,
      email,
    });
    return result.data.token;
  } catch (error) {
    console.log(error);
  }
};

const register = async ({ name, password, email }) => {
  try {
    const result = await axios.post("/register", {
      password,
      email,
      name,
    });
    return result.data.user;
  } catch (error) {
    console.log(error);
  }
};

export { login, register };

import axios from "axios";

const AuthService = {};

const authApiUrl = "http://localhost:3000/auth";

AuthService.login = async (credentials) => {
  return await axios.post(authApiUrl + "/login", {
    email: credentials.email,
    password: credentials.password,
  });
};

AuthService.register = async (credentials) => {
  return await axios.post(authApiUrl + "/register", {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
  });
};

export default AuthService;

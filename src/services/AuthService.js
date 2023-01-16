import axios from "axios";

const AuthService = {};

const authApiUrl = "http://localhost:3000/auth";
const prodUrl = "https://movierentingback-production.up.railway.app/auth";

AuthService.login = async (credentials) => {
  return await axios.post(prodUrl + "/login", {
    email: credentials.email,
    password: credentials.password,
  });
};

AuthService.register = async (credentials) => {
  return await axios.post(prodUrl + "/register", {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
  });
};

export default AuthService;

import axios from "axios";

const UserService = {};
const apiUrl = "http://localhost:3000/users";
const prodUrl = "https://movierentingback-production.up.railway.app/users";

UserService.getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(prodUrl, config);
};

UserService.deleteById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(prodUrl + `/${id}`, config);
};

UserService.getById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const results = await axios.get(prodUrl + `/${id}`, config);
  console.log(results.data.data);
  return results.data.data;
};

export default UserService;

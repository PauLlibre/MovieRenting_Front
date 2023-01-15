import axios from "axios";

const UserService = {};
const apiUrl = "http://localhost:3000/users";

UserService.getAllUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(apiUrl, config);
};

UserService.deleteById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.post(apiUrl + `/${id}`, config);
};

UserService.getById = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const results = await axios.get(apiUrl + `/${id}`, config);
  console.log(results.data.data);
  return results.data.data;
};

export default UserService;

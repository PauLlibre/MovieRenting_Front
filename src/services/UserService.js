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

export default UserService;

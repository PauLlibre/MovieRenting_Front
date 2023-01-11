import axios from "axios";

const UserService = {};

UserService.getAllUsers = async (token) => {
  const apiUrl = "http://localhost:3000/users";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(apiUrl, config);
};

export default UserService;

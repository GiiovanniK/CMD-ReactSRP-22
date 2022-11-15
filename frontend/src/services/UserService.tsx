import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

const getUser = () => {
  return axios.get(
    BASE_URL + "/users",
  );
};

const UserService = {
  getUser,
};

export default UserService;
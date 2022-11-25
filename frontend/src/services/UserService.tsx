import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

const getUser = () => {
  const config = {
    headers: {
      "content-type": "application/json",
      // set token in header
      "x-auth-token": localStorage.getItem("user"),
    },
  }
  return axios.get(
    BASE_URL + "/users",
    config,
  );
};

const UserService = {
  getUser,
};

export default UserService;
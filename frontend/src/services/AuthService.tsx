import axios from "axios";
import { UserLogin, UsersRequest } from "../pages/user/Types";

const BASE_URL = process.env.REACT_APP_API;

const register = (payload: UsersRequest) => {
  return axios.post(BASE_URL + "/register", {
    data: payload,
  });
};

const login = (payload: UserLogin) => {
  return axios
    .post(BASE_URL + "/login", {
      data: payload,
    })
    .then((response) => {
      if (response.data.accessToken) {
        // set jwt in local storage
        localStorage.setItem("user", response.data.accessToken);
      } else {
        console.log("no response");
      }
    });
};

// remove jwt from localstorage
const logout = async() => {
  await localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;

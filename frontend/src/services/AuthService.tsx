import axios from "axios";
import { UsersRequest } from "../pages/user/Types";

const BASE_URL = process.env.REACT_APP_API;

const register = (payload: UsersRequest) => {
  return axios.post(BASE_URL + "/register", {
    data: payload,
  });
};

const login = (email: string, password: string) => {
  return axios
    .post("/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.email) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post("/logout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")!);
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

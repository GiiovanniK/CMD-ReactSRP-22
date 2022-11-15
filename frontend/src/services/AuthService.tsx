import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API;

const register = (email: string, password: string) => {
    return axios.post(BASE_URL + "register", {
        email,
        password,
    });
};

const login = (email: string, password: string) => {
  return axios.post(BASE_URL + "login", {
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
    return axios.post(BASE_URL + "logout").then((response) => {
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
}

export default AuthService;
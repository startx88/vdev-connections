import axios from 'axios';

// instance
const instance = axios.create({
  baseURL: 'http://localhost:4200/api',
  withCredentials: false,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.token
  }
});

// set auth token
export const setAuthToken = () => {
  const isToken = localStorage.token;
  if (isToken) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${isToken}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
}

// export
export default instance
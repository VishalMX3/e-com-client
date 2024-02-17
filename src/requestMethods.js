import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const userExists = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).user
).currentUser;

const TOKEN = userExists
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken
  : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

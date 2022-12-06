import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "app-id": "63104c3120f6e665ecf628ba",
  },
});

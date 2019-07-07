import axios from "axios";
const API_URL = "http://localhost:8000/api/wp-json/acf/v3";

class Http {
  api = axios.create({
    baseURL: `${API_URL}`
  });

  constructor() {
    this.api.interceptors.request.use(
      async config => {
        return config;
      },
      error => {
        // I cand handle a request with errors here
        return Promise.reject(error);
      }
    );
  }
  get = route => {
    return this.api.get(route);
  };
  post = (route, body) => {
    return this.api.post(route, body);
  };
  put = (route, body) => {
    return this.api.put(route, body);
  };
}

export const http = new Http();

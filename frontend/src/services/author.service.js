const axios = require("axios");
const baseURL = "http://localhost:3000";

export default class BookService {
  getAuthors() {
    return axios.get(baseURL + "/authors");
  }
  getAuthor(id) {
    return axios.get(baseURL + `/author/${id}`);
  }

  createAuthor(data) {
    return axios.post(baseURL + "/author", data);
  }

  updateAuthor(id, data) {
    return axios.put(baseURL + `/author/${id}`, data);
  }
}

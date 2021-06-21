const axios = require("axios");
const baseURL = "http://localhost:3000";

export default class BookService {
  getBooks() {
    return axios.get(baseURL + "/books");
  }
  getBook(id) {
    return axios.get(baseURL + `/book/${id}`);
  }

  createBook(data) {
    return axios.post(baseURL + "/book", data);
  }

  updateBook(id, data) {
    return axios.put(baseURL + `/book/${id}`, data);
  }
}

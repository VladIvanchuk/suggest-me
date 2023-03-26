import axios from "axios";

const url = "https://movie-fp2m.onrender.com/api/movies";

export const api = {
  async getMoviesByGenre(number, genre) {
    const response = await axios.get(`${url}/list?limit=${number}&genres=${genre}`);

    return response.data;
  },
  async getMovieById(id) {
    const response = await axios.get(`${url}/${id}`);

    return response.data;
  },
};

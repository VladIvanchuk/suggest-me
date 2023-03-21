import axios from "axios";

const url = "https://movie-w83k.onrender.com/tmdb";

export const api = {
  async getMovies(number) {
    const response = await axios.get(`${url}/movie?limit=${number}`);

    return response.data;
  },
  async getMovieById(id) {
    const response = await axios.get(`${url}/movie/${id}`);

    return response.data;
  },
};

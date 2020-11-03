import axios from "axios";

const url = process.env.API_URL || "http://localhost:5000"

export default {
  getAllPalettes: () => {
    return axios
      .get(`${url}/api/palettes`)
      .then(result => result.data)
      .catch(function(error) {
        console.log(error);
      });
  },
  getOnePalette: id => {
    return axios
      .get(`${url}/api/palettes/${id}`)
      .then(result => result.data)
      .catch(function(error) {
        console.log(error);
      });
  },
  createPalette: newData => {
    return axios
      .post(`${url}/api/palettes/new`, newData)
      .then(result => result.data, console.log("Palette Created"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/"));
  },
  deletePalette: id => {
    return axios
      .delete(`${url}/api/palettes/${id}`)
      .then(result => result.data, console.log("Palette Deleted"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/"));
  },
  updatePalette: (id, newData) => {
    return axios
      .put(`${url}/api/palettes/edit/${id}`, newData)
      .then(result => result.data, console.log("Palette Updated"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign(`/${id}`));
  }
};

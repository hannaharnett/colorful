import axios from "axios";

export default {
  getAllPalettes: () => {
    return axios
      .get(`http://localhost:5000/api/palettes`)
      .then(result => result.data)
      .catch(function(error) {
        console.log(error);
      });
  },
  getOnePalette: id => {
    return axios
      .get(`http://localhost:5000/api/palettes/${id}`)
      .then(result => result.data)
      .catch(function(error) {
        console.log(error);
      });
  },
  createPalette: newData => {
    return axios
      .post(`http://localhost:5000/api/palettes/new`, newData)
      .then(result => result.data, console.log("Palette Created"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/api/palettes"));
  },
  deletePalette: id => {
    return axios
      .delete(`http://localhost:5000/api/palettes/${id}`)
      .then(result => result.data, console.log("Palette Deleted"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/api/palettes"));
  },
  updatePalette: (id, newData) => {
    return axios
      .put(`http://localhost:5000/api/palettes/edit/${id}`, newData)
      .then(result => result.data, console.log("Palette Updated"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/api/palettes"));
  }
};

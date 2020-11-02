import axios from "axios";

export default {
  getAllPalettes: () => {
    return axios
      .get(`https://colorful-app.herokuapp.com/api/palettes`)
      .then(result => result.data)
      .catch(function(error) {
        console.log(error);
      });
  },
  getOnePalette: id => {
    return axios
      .get(`https://colorful-app.herokuapp.com/api/palettes/${id}`)
      .then(result => result.data)
      .catch(function(error) {
        console.log(error);
      });
  },
  createPalette: newData => {
    return axios
      .post(`https://colorful-app.herokuapp.com/api/palettes/new`, newData)
      .then(result => result.data, console.log("Palette Created"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/"));
  },
  deletePalette: id => {
    return axios
      .delete(`https://colorful-app.herokuapp.com/api/palettes/${id}`)
      .then(result => result.data, console.log("Palette Deleted"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign("/"));
  },
  updatePalette: (id, newData) => {
    return axios
      .put(`https://colorful-app.herokuapp.com/api/palettes/edit/${id}`, newData)
      .then(result => result.data, console.log("Palette Updated"))
      .catch(error => {
        console.log(error);
      })
      .then(window.location.assign(`/${id}`));
  }
};

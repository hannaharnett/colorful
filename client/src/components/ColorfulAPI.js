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
  deletePalette: id => {
    return axios
      .delete(`http://localhost:5000/api/palettes/${id}`)
      .then(result => result.data, console.log("Palette Deleted"))
      .catch(function(error) {
        console.log(error);
      })
      .then(window.location.assign("/api/palettes"));
  }
};

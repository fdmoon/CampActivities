import axios from "axios";

const RANDOMURL = "https://dog.ceo/api/breeds/image/random";
const SEARCHURL = "https://dog.ceo/api/breed/";

export default {
  randomImage: () => {
    console.log(RANDOMURL);
    return axios.get(RANDOMURL);
  },
  searchList: (breed) => {
    return axios.get(SEARCHURL + breed + "/images");
  }
};

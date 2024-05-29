import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "94a61ead4b56447693ecb19e31de3356",
  },
});

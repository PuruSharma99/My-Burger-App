import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-21f55-default-rtdb.firebaseio.com/",
});

export default instance;

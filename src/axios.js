import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-be1.herokuapp.com/",
});

export default instance;
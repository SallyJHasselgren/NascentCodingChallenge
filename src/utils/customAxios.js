import axios from 'axios';
//root url
const baseURL = "https://pokeapi.co";

const customAxios = axios.create({

    baseURL:baseURL,

})

export default customAxios;
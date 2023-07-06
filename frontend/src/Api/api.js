import axios from "axios";


export const getFromDB = (url) => axios.get(url).then((res) => res.data);
export const createInDB = (url, data) => axios.post(url, data).then((res) => res.data);
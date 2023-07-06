import axios from "axios";


export const getDB = (url) => axios.get(url).then((res) => res.data);
// export const createDB = (url, data) => axios.post(url, data).then((res) => res.data);
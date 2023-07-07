import axios from "axios";


export const getFromDB = (url) => axios.get(url).then((res) => res.data);
export const createInDB = (url, data) => axios.post(url, data).then((res) => res.data);

export const updateDB = (url, data) => axios.patch(url, data).then((res) => res.data);
export const deleteFromDB = (url) => axios.delete(url).then((res) => res.data)
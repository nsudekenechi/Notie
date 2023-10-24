import axios from "axios";
const globalPath = "http://localhost:5000/api/";

export const getFromDB = (url, header) => axios.get(globalPath + url, header).then((res) => res.data);
export const createInDB = (url, data,header) => axios.post(globalPath + url, data,header).then((res) => res.data);

export const updateDB = (url, data) => axios.patch(globalPath + url, data).then((res) => res.data);
export const deleteFromDB = (url) => axios.delete(globalPath + url).then((res) => res.data)
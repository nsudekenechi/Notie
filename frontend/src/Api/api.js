import axios from "axios";
let type = "online";
const globalPath = type == "local" ? "http://localhost:5000/api/" : "https://notie-api-nsudekenechi.vercel.app/api/";

export const getFromDB = (url, header) => axios.get(globalPath + url, header).then((res) => res.data);
export const createInDB = (url, data, header) => axios.post(globalPath + url, data, header).then((res) => res.data);

export const updateDB = (url, data, header) => axios.patch(globalPath + url, data, header).then((res) => res.data);
export const deleteFromDB = (url, header) => axios.delete(globalPath + url, header).then((res) => res.data);
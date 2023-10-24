import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { createInDB } from "../api/api";
import { useNavigate } from "react-router-dom";
import { notesContext } from "./context";
import { useContext } from "react";
export const useFormValidation = (schema, inputs, url) => {
    const navigate = useNavigate();
    const { setUser } = useContext(notesContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    // sessionStorage.getItem("user")  && setUser(JSON.parse(sessionStorage.getItem("user")))
    const onSubmit = (e) => {
        e.preventDefault()
        // Making request to Login
        createInDB(url, { ...inputs },{}).then(e => {
            // Storing to session
            sessionStorage.setItem("user", JSON.stringify(e));
            setUser(e);
            navigate("/dashboard/addnew");
        }).catch(err => {
            console.log(err.response.data);
        })

    }


    return { onSubmit, register, handleSubmit, errors }
}
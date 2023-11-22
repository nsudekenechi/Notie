import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { createInDB } from "../Api/api";
import { useNavigate } from "react-router-dom";
import { notesContext } from "./context";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';

export const useFormValidation = (schema, url) => {
    const navigate = useNavigate();
    const { setUser } = useContext(notesContext)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {

        setIsLoading(true);
        // Making request
        createInDB(url, { ...data }, {}).then(e => {
            // Storing to session
            sessionStorage.setItem("user", JSON.stringify(e));
            setUser(e);
            navigate("/dashboard/addnew");
        }).catch(err => {
            setIsLoading(false);
            toast.error(err.response.data)
        })

    }



    return { onSubmit, register, handleSubmit, errors, isLoading }
}
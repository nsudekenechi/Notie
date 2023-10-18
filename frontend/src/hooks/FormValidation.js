import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup";
import { createInDB } from "../api/api";
export const useFormValidation = (schema, inputs, url) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = (e) => {
        e.preventDefault()

        // Making request to Login
        createInDB(url, {...inputs}).then(e => {
            console.log(e)
        }).catch(err => {
            console.log(err.response.data)
        })

    }
    return { register, handleSubmit, onSubmit, errors }
}
import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup";
import { createInDB } from "../api/api"; 
export const useFormValidation = (schema,inputs) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = (e) => {
        e.preventDefault()
        
        const createUser=createInDB('user/',{...inputs})
        createUser.then(e=>{
            console.log(e.respose.data);
        }).catch(e=>{
            console.log(e)
        })
       
        
    }
    return { register, handleSubmit, onSubmit, errors }
}
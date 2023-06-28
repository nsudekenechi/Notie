import { useForm } from "react-hook-form"

import { yupResolver } from "@hookform/resolvers/yup"
export const useFormValidation = (schema) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = () => {
        reset();
    }
    return { register, handleSubmit, onSubmit, errors }
}
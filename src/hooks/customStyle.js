import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

// Custom Hook for switching dark/light mode
export const useStyle = () => {
    const [darkmode, setDarkMode] = useState(false)
    const toogleMode = () => {
        setDarkMode(!darkmode)
    }


    return {
        mode: darkmode,
        toogleMode,
        borderColor: darkmode ? "border-white" : "border-black",
        borderColor2: darkmode ? "border-black" : "border-white",
        bodyColor: darkmode ? "bg-black text-white" : "bg-white text-black"
    }
}
export const useInput = () => {
    const [focus, setFocus] = useState(true)
    const onFocus = (e) => {
        setFocus(e.target.value != "" ? false : false)
    }
    const onBlur = (e) => {
        setFocus(e.target.value != "" ? false : true)
    }

    return {
        focus,
        onFocus,
        onBlur,
        translateY: focus ? "60%" : 0,
        border: focus ? "0.1px solid rgba(0,0,0,.2)" : "0.1px solid #54428E",
        errorBorder: "0.1px solid red"

    }
}
export const useAnimateSlide = () => {
    const [slide, setSlide] = useState(0)

    const sliders = [{
        img: "home.png",
        title: "Connect with every Application",
        subtitle: "Everything You need in an easy customizable dashboard."
    }, {
        img: "home2.png",
        title: "Connect with every Application",
        subtitle: "Everything You need in an easy customizable dashboard."
    }];
    const slideAnimation = {
        init: {
            opacity: 0,
            scale: 0.1,
            borderRadius: "50%",
        },
        animate: {
            opacity: 1,
            scale: 0.7,
            borderRadius: "0%",

        },
    }
    const onSlide = (index) => {
        setSlide(index)
    }

    return { slide, onSlide, sliders, slideAnimation }
}

export const useFormValidation = () => {
    const schema = yup.object().shape({
        Email: yup.string().email("Please enter a valid email address").required("Field is required"),
        Password: yup.string().min(6, "Password must be atleast 6 characters").required("Field is required")
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = () => {
        reset();
    }
    return { login: { register, handleSubmit, onSubmit, errors } }
}
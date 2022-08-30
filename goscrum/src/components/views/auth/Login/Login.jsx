// import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate, Link} from 'react-router-dom';
import * as Yup from "yup"
import "../Auth.styles.css"

export const Login = () => {

    const { REACT_APP_APPI_ENDPOINT } = process.env

    const initialValues= {
        userName: "",
        password: "",
    }

    const validationSchema = () => Yup.object().shape({
        userName: Yup.string().min(6, "cantidad minima de caracteres es 6").required("* ingrese el nombre de usuario"),
        password: Yup.string().required("* ingrese la contraseña"),
    })

    const navigate = useNavigate()


    const onSubmit = () => {

        const { userName, password } = values

        fetch(`${REACT_APP_APPI_ENDPOINT}auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                password
            }),   
        })
        .then(response  => response.json())
        .then( data => {
            localStorage.setItem("token", data?.result?.token)
            navigate("/", {replace: true})
        })
    };


    const formik = useFormik( { initialValues, validationSchema, onSubmit } )

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, } = formik;




  return (
    <div className="auth">
        <form onSubmit={handleSubmit} >
            <h1>Iniciar sesion</h1>
            <div>
                <label>Nombre de Usuario</label>
                <input
                className={errors.userName ? "error" : "" }
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.userName && touched.userName && <div>{errors.userName}</div>}
            </div>
            <div>
                <label>Contraseña</label>
                <input
                className={errors.password ? "error" : "" }
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.password && touched.password && <div>{errors.password}</div>}
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
            <div><Link to="/register">Registrarme</Link></div>
        </form>
    </div>
  )
}

// import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import "./Login.styles.css"

export const Login = () => {

    const initialValues= {
        email: "",
        password: "",
    }

    const validate = values => {
        const errors = {};

        if(!values.email) {
            errors.email = "El mail es requerido"
        }

        if(!values.password) {
            errors.password = "El password es requerido"
        }

        return errors;

    }

    const navigate = useNavigate()


    const onSubmit = () => {
        localStorage.setItem("logged", "yes")
        navigate("/", {replace: true})
    };


    const formik = useFormik( { initialValues, validate, onSubmit } )

    const { handleSubmit, handleChange, values, errors } = formik;




  return (
    <div className="auth">
        <form onSubmit={handleSubmit} >
            <h1>Iniciar sesion</h1>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Contraseña</label>
                <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  )
}

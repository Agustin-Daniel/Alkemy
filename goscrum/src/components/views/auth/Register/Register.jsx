// import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from "yup"
import "../Auth.styles.css"


export const Register = () => {

    const initialValues= {
        email: "",
        password: "",
        userName:"",
        teamID: "",
        role: "",
        continent:"",
        region:"",
    }

    const onSubmit = () => {
        alert("")
    };

    const validationSchema = () => Yup.object().shape({
        userName: Yup.string().min(6, "cantidad minima de caracteres es 6").required("* ingrese el nombre de usuario"),
        password: Yup.string().required("* ingrese la contraseña"),
        email: Yup.string().email("* debe ser una email valido").required("* ingrese el mail"),
        teamID: Yup.string().required("* campo obligatorio"),
        role: Yup.string().required("* campo obligatorio"),
        continent:Yup.string().required("* campo obligatorio"),
        region: Yup.string().required("* campo obligatorio")
    })



    const formik = useFormik( { initialValues, onSubmit, validationSchema } )

    const { handleSubmit, handleBlur, handleChange, errors, touched, values } = formik;



  return (
    <div className="auth">
        <form onSubmit={handleSubmit} >
            <h1>Registro</h1>
            <div>
                <label>Nombre de usuario</label>
                <input
                className={errors.userName ? "error" : "" }
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.userName && touched.userName && <span className='error-message'>{errors.userName}</span>}
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
                {errors.password && touched.password && <span className='error-message'>{errors.password}</span>}
            </div>
            <div>
                <label>Email</label>
                <input
                className={errors.email ? "error" : "" }
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.email && touched.email && <span className='error-message'>{errors.email}</span>}
            </div>
            <input
                type="hidden"
                name="TeamID"
                value="9cdbd108-f924-4383-947d-8f0c651d@dad" />
            <div>
                <label>Rol</label>
                <select className={errors.role ? "error" : "" } name="role" value={values.role} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Seleccionar opcion</option>
                    <option value="Team Member">Team Member</option>
                    <option value="Team Leader">Team Leader</option>
                </select>
                {errors.role && touched.role && <span className='error-message'>{errors.role}</span>}
            </div>
            <div>
                <label>Continente</label>
                <select className={errors.continent ? "error" : "" } name="continent" value={values.continent} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Seleccionar opcion</option>
                    <option value="America">America</option>
                    <option value="Europa">Europa</option>
                    <option value="Otro">Otro</option>
                </select>
                {errors.continent && touched.continent && <span className='error-message'>{errors.continent}</span>}
            </div>
            <div>
                <label>Región</label>
                <select className={errors.region ? "error" : "" } name="region" value={values.region} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Seleccionar opcion</option>
                    <option value="America del Norte">America del Norte</option>
                    <option value="Latam">Latam</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Otro">Otro</option>
                </select>
                {errors.region && touched.region && <span className='error-message'>{errors.region}</span>}
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
            <div><Link to="/login">Ir a iniciar sesion</Link></div>
        </form>
    </div>
  )
}

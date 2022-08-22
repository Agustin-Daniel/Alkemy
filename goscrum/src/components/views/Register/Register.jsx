// import React, { useState } from 'react';
import { useFormik } from 'formik';


export const Register = () => {

    const initialValues= {
        email: "",
        password: "",
        userName:"",
    }

    const onSubmit = () => {
        alert("")
    };


    const formik = useFormik( { initialValues, onSubmit } )

    const { handleSubmit, handleChange, values, errors } = formik;



  return (
    <div className="container">
        <form onSubmit={handleSubmit} >
            <h1>Registro</h1>
            <div>
                <label>Nombre de usuario</label>
                <input
                type="text"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                />
                {errors.userName && <div>{errors.userName}</div>}
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
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <input
                type="hidden"
                name="TeamID"
                value="9cdbd108-f924-4383-947d-8f0c651d@dad" />
            <div>
                <label>Rol</label>
                <select name="role" value={values.role} onChange={handleChange}>
                    <option value="Team Member">Team Member</option>
                    <option value="Team Leader">Team Leader</option>
                </select>
                {errors.role && <div>{errors.role}</div>}
            </div>
            <div>
                <label>Continente</label>
                <select name="continent" value={values.continent} onChange={handleChange}>
                    <option value="America">America</option>
                    <option value="Europa">Europa</option>
                    <option value="Otro">Otro</option>
                </select>
                {errors.continent && <div>{errors.continent}</div>}
            </div>
            <div>
                <label>Región</label>
                <select name="region" value={values.region} onChange={handleChange}>
                    <option value="America del Norte">America del Norte</option>
                    <option value="Latam">Latam</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Otro">Otro</option>
                </select>
                {errors.region && <div>{errors.region}</div>}
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
  )
}

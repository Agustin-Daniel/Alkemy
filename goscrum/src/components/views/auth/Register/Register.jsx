import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup"
import { v4 as uuidv4 } from 'uuid'
import { Switch, FormControlLabel } from '@mui/material'

import "../Auth.styles.css"

const { REACT_APP_APPI_ENDPOINT } = process.env

export const Register = () => {

    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
      fetch(`${REACT_APP_APPI_ENDPOINT}auth/data`)
      .then(response => response.json())
      .then(data => setData(data.result))
    }, [])

    const initialValues= {
        email: "",
        password: "",
        userName:"",
        teamID: "",
        role: "",
        continent:"",
        region:"",
        switch: false
    }

    const handleChangeContinent = (value) => {
        setFieldValue( "continent", value )
        if ( values !== "America" ) setFieldValue( "region", "Otro" )
    }

    const onSubmit = () => {
        const teamID = !values.teamID ? uuidv4() : values.teamID

        fetch(`${REACT_APP_APPI_ENDPOINT}auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    userName: values.userName,
                    password: values.password,
                    email: values.email,
                    teamID,
                    role: values.role,
                    continent: values.continent,
                    region: values.region
                },
            }),   
        })
        .then(response  => response.json())
        .then(data => navigate("/registered/" + data?.result?.user?.teamID,
        {replace: true}
        ))       
    }

    const validationSchema = () => Yup.object().shape({
        userName: Yup.string().min(6, "cantidad minima de caracteres es 6").required("* ingrese el nombre de usuario"),
        password: Yup.string().required("* ingrese la contraseña"),
        email: Yup.string().email("* debe ser una email valido").required("* ingrese el mail"),
        // teamID: Yup.string().required("* campo obligatorio"),
        role: Yup.string().required("* campo obligatorio"),
        continent:Yup.string().required("* campo obligatorio"),
        region: Yup.string().required("* campo obligatorio")
    })



    const formik = useFormik( { initialValues, onSubmit, validationSchema } )

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, setFieldValue } = formik;



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
            <FormControlLabel
                control={
                    <Switch
                        value={values.switch}
                        onChange={() =>
                            formik.setFieldValue("switch", !formik.values.switch)
                        }
                        name="switch"
                        color='secondary'
                    />
                }
                label='Perteneces a un equipo ya creado'
            />
            {values.switch && (
            <div>
                <label>Por favor, introduce el identificador de equipo</label>
            <input
                type="text"
                name="TeamID"
                value={values.teamID}
                onChange={handleChange}
                />
            </div>
            )}
            <div>
                <label>Rol</label>
                <select className={errors.role ? "error" : "" } name="role" value={values.role} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Seleccionar opcion</option>

                    {data?.Rol?.map( option => (
                        <option value={option} key={option} >{option}</option>
                    ))}

                </select>
                {errors.role && touched.role && <span className='error-message'>{errors.role}</span>}
            </div>
            <div>
                <label>Continente</label>
                <select
                    className={errors.continent ? "error" : "" }
                    name="continent"
                    value={values.continent}
                    onChange={ event => handleChangeContinent(event.currentTarget.value) }
                    onBlur={handleBlur}
                >
                    <option value="">Seleccionar opcion</option>

                    {data?.continente?.map( option => (
                        <option value={option} key={option} >{option}</option>
                    ))}

                </select>
                {errors.continent && touched.continent && <span className='error-message'>{errors.continent}</span>}
            </div>

            {values.continent === "America" && (
                <div>
                <label>Región</label>
                <select className={errors.region ? "error" : "" } name="region" value={values.region} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Seleccionar opcion</option>

                    {data?.region?.map( option => (
                        <option value={option} key={option} >{option}</option>
                    ))}

                </select>
                {errors.region && touched.region && <span className='error-message'>{errors.region}</span>}
                </div>
            )}

            <div>
                <button type="submit">Enviar</button>
            </div>
            <div><Link to="/login">Ir a iniciar sesion</Link></div>
        </form>
    </div>
  )
}

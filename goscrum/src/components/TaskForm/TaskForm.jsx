
import './TaskForm.styles.css'
import { useFormik } from 'formik';
import * as Yup from "yup"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export const TaskForm = () => {

    const { REACT_APP_APPI_ENDPOINT } = process.env

    const initialValues= {
        title: "",
        status: "",
        importance: "",
        description: "",
    }
    

    const onSubmit = () => {
        fetch(`${REACT_APP_APPI_ENDPOINT}task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({ task: values }),   
        })
        .then(response  => response.json())
        .then(data => {
            toast("Tu tarea se creo");
            resetForm();
        }); 
    };

    const validationSchema = () => Yup.object().shape({
        title: Yup.string().min(6, "cantidad minima de caracteres es 6").required("* por favor pone el titulo"),
        status: Yup.string().required("* por favor pone el estado"),
        description: Yup.string().required("* por favor ponE una descripcion"),
        importance: Yup.string().required("* por favor pone una prioridad"),
    })


    const formik = useFormik( { initialValues, validationSchema, onSubmit } )

    const { handleSubmit, handleBlur, handleChange, errors, touched, values, resetForm } = formik;



  return (
    <section className="task-form">
        <h2>Crear tarea</h2>
        <p>Crea tus tareas</p>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <input
                        className={errors.title ? "error" : "" }
                        name='title'
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Titulo'
                        value={values.title}
                    />
                    {errors.title && touched.title && <span className='error-message'>{errors.title}</span>}
                </div>
                <div>
                    <select
                        className={errors.status ? "error" : "" }
                        name="status"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status}
                    >
                        <option value="">Seleccionar opcion</option>
                        <option value="NEW">Nueva</option>
                        <option value="IN PROGRESS">En proceso</option>
                        <option value="FINISHED">Terminada</option>
                    </select>
                    {errors.status && touched.status && <span className='error-message'>{errors.status}</span>}
                </div>
                <div>
                    <select
                        className={errors.importance ? "error" : "" }
                        name="importance"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.importance}
                    >
                        <option value="">Seleccionar opcion</option>
                            <option value="LOW">Baja</option>
                            <option value="MEDIUM">Media</option>
                            <option value="HIGH">Alta</option>
                    </select>
                    {errors.importance && touched.importance && <span className='error-message'>{errors.importance}</span>}
                </div>
            </div>
            <div>
                <textarea
                    className={errors.description ? "error" : "" }
                    name='description'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Descripcion'
                    value={values.description}
                />
                {errors.description && touched.description && <span className='error-message'>{errors.description}</span>}
            </div>
            <button type='submit'>Crear</button>
        </form>  
        <ToastContainer />
    </section>
  )
}

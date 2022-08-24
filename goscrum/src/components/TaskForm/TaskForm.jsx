
import './TaskForm.styles.css'
import { useFormik } from 'formik';
import * as Yup from "yup"

export const TaskForm = () => {

    const initialValues= {
        title: "",
        status: "",
        priority: "",
        description: "",
    }

    const onSubmit = () => {
        alert("")
    };

    const validationSchema = () => Yup.object().shape({
        title: Yup.string().min(6, "cantidad minima de caracteres es 6").required("* por favor pone el titulo"),
        status: Yup.string().required("* por favor pone el estado"),
        priority: Yup.string().required("* por favor pone una prioridad"),
    })


    const formik = useFormik( { initialValues, validationSchema, onSubmit } )

    const { handleSubmit, handleBlur, handleChange, errors, touched } = formik;



  return (
    <section className="task-form">
        <h2>Crear tarea</h2>
        <p>Crea tus tareas</p>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <input className={errors.title ? "error" : "" } name='title' type="text" onChange={handleChange} onBlur={handleBlur} placeholder='Titulo' />
                    {errors.title && touched.title && <span className='error-message'>{errors.title}</span>}
                </div>
                <div>
                    <select className={errors.status ? "error" : "" } name="status" onChange={handleChange} onBlur={handleBlur} >
                        <option value="">Seleccionar opcion</option>
                        <option value="new">Nueva</option>
                        <option value="inProcces">En proceso</option>
                        <option value="finished">Terminada</option>
                    </select>
                    {errors.status && touched.status && <span className='error-message'>{errors.status}</span>}
                </div>
                <div>
                    <select className={errors.priority ? "error" : "" } name="priority" onChange={handleChange} onBlur={handleBlur}>
                        <option value="">Seleccionar opcion</option>
                            <option value="low">Baja</option>
                            <option value="medium">Media</option>
                            <option value="high">Alta</option>
                    </select>
                    {errors.priority && touched.priority && <span className='error-message'>{errors.priority}</span>}
                </div>
            </div>
            <div>
                <textarea name='description' onChange={handleChange} placeholder='Descripcion'/>
            </div>
            <button type='submit'>Crear</button>
        </form>
    </section>
  )
}

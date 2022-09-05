import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const useState = React.useState;
const useEffect = React.useEffect;


const validationMessages = {
    fullname: {
        required: 'El campo fullname es obligatorio',
        fieldLength: 'El campo nombre debe tener entre 4 y 50 caracteres',
        format: 'El campo nombre solo puede contener letras'
    },
    age: {
        required: 'El campo age es obligatorio',
        numbers: 'El campo edad solo puede contener numeros',
        fieldLength: 'El campo edad debe tener un valor entre 18 y 99'
    },
    email: {
        required: 'El campo email es obligatorio',
        format: 'El campo email debe tener un formato válido'
    }
}

const SignupSchema = Yup.object().shape({
    // COMPLETAR VALIDACIONES
});

const ValidationSchemaExample = () => {

    return (
        <div>
            <h1>Signup</h1>

            {/* CONFIGURAR VALIDACIONES */}
            <Formik>
                {/* COMPLETAR */}
            </Formik>
        </div>
    );
}

export { ValidationSchemaExample, validationMessages };
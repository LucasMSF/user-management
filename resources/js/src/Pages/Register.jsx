import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/inertia-react';
import { useFormik } from 'formik'
import React from 'react'

//Icon
import { BsPersonPlus, BsArrowLeft } from "react-icons/bs";

import AuthBox from '../components/Auth/AuthBox';
import AuthForm from '../components/Auth/AuthForm';
import RegisterValidator from '../Validators/RegisterValidator';


const Register = ({ errors }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            confirmPassword: '',
        },
        validate: RegisterValidator,
        onSubmit: (values, { setSubmitting }) => {
            Inertia.post('/register', values, {
                onFinish: () => setSubmitting(false)
            });
        },
    })

    return (
        <>
            <Head title='Register' />
            <AuthBox title='Cadastro' errors={errors}>
                <AuthForm
                    formik={formik}
                    fields={[
                        {
                            label: 'Nome',
                            name: 'name',
                            type: 'text',
                        },
                        {
                            label: 'E-mail',
                            name: 'email',
                            type: 'email',
                        },
                        {
                            label: 'Senha',
                            name: 'password',
                            type: 'password',
                        },
                        {
                            label: 'Confirmar Senha',
                            name: 'confirmPassword',
                            type: 'password',
                        },
                    ]}
                    buttons={{
                        submit: {
                            text: 'REGISTRAR-SE',
                            icon: BsPersonPlus,
                        },
                        redirect: {
                            text: 'FAZER LOGIN',
                            route: 'login',
                            icon: BsArrowLeft,
                        }
                    }}
                />
            </AuthBox>
        </>
    )
}

export default Register
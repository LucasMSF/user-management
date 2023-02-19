import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/inertia-react';
import { useFormik } from 'formik'
import React from 'react'

import { BsPersonPlus, BsArrowRight } from "react-icons/bs";

import AuthBox from '../components/Auth/AuthBox';
import AuthForm from '../components/Auth/AuthForm';

import LoginValidator from '../Validators/LoginValidator'

const Login = ({ errors }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: LoginValidator,
        onSubmit: (values, { setSubmitting }) => {
            Inertia.post('/login', values, {
                onFinish: () => setSubmitting(false)
            });
        },
    })

    return (
        <>
            <Head title='Login' />
            <AuthBox title='Login' errors={errors}>
                <AuthForm
                    formik={formik}
                    fields={[
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
                    ]}
                    buttons={{
                        submit: {
                            text: 'ENTRAR',
                            icon: BsArrowRight,
                        },
                        redirect: {
                            text: 'QUERO ME CADASTRAR',
                            route: 'register',
                            icon: BsPersonPlus,
                        }
                    }}
                />
            </AuthBox>
        </>

    )
}

export default Login
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import React from 'react'
import AuthInput from './AuthInput'

const AuthFormControl = ({label, name, type, formik}) => {
    return (
        <FormControl isInvalid={formik.errors[name]}>
            <FormLabel>{label}</FormLabel>
            <AuthInput name={name} type={type} formik={formik} />
            {formik.errors[name] && <FormErrorMessage>{formik.errors[name]}</FormErrorMessage>}
        </FormControl>
    )
}

export default AuthFormControl
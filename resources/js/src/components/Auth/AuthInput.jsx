import { Input } from '@chakra-ui/react'
import React from 'react'

const AuthInput = (props) => {
    return (
        <Input
        name={props.name}
        type={props.type} 
        border={'2px'} 
        focusBorderColor={'blue.400'}
        onChange={props.formik ? props.formik.handleChange : null}
        value={props.formik ? props.formik.values[props.name] : null}
        />
    )
}

export default AuthInput
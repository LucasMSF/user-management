import React from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Checkbox,
} from '@chakra-ui/react'

const EditUserFormControl = ({ label, type, name, formik }) => {
    return (
        <FormControl isInvalid={formik.errors[name]}>
            <FormLabel>{label}</FormLabel>
            {
                type === 'checkbox'
                    ? <Checkbox defaultChecked={formik.values[name]} name={name} onChange={formik.handleChange}></Checkbox>
                    : <Input type={type} name={name} value={formik.values[name]} onChange={formik.handleChange} />
            }
            {
                formik.errors[name] && <FormErrorMessage fontWeight={'bold'}>{formik.errors[name]}</FormErrorMessage> 
            }
        </FormControl>
    )
}

export default EditUserFormControl
import React from 'react'
import EditUserFormControl from './EditUserFormControl'

import { VStack } from '@chakra-ui/react'

const EditUserForm = ({ user, formik }) => {
    return (
        <form id={`edit-user-${user.id}`} onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
                <EditUserFormControl type='text' label='Nome' name='name' formik={formik} />
                <EditUserFormControl type='email' label='E-mail' name='email' formik={formik} />
                <EditUserFormControl type='password' label='Senha' name='password' formik={formik} />
                <EditUserFormControl type='checkbox' label='Bloquear' name='blocked' formik={formik} />
            </VStack>
        </form>
    )
}

export default EditUserForm
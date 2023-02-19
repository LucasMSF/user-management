import { Box, Button, VStack } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import AuthFormControl from './AuthFormControl'

const AuthForm = ({ formik, fields, buttons }) => {
    return (
        <form onSubmit={formik.handleSubmit}>
            <VStack spacing={'4'}>
                {fields.map(({label, name, type}, index) => <AuthFormControl key={index} label={label} name={name} type={type} formik={formik} />)}
            </VStack>
           <VStack marginTop={'12'} spacing={'4'}>
           <Button isLoading={formik.isSubmitting} type='submit' color={'white'}  width={'100%'} colorScheme='yellow'>{buttons.submit.text.toUpperCase()} <Box marginLeft={2}><buttons.submit.icon fontSize={24} /></Box></Button>
            <Button onClick={() => Inertia.visit(buttons.redirect.route)} color={'white'} width={'100%'} colorScheme='twitter'>{buttons.redirect.text.toUpperCase()} <Box marginLeft={2}><buttons.redirect.icon fontSize={24} /></Box></Button>
           </VStack>
        </form>
    )
}

export default AuthForm
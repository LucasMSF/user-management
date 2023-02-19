import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorAlert = ({ description }) => {
    return (
        <Alert bg={'red.700'} rounded={'xl'} status='error'>
            <AlertIcon />
            {description}
        </Alert>
    )
}

export default ErrorAlert
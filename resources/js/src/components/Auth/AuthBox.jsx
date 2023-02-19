import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ErrorAlert from '../Alert/ErrorAlert'

import {Colors} from '../../Colors/Colors'

const AuthBox = ({ children, title, errors }) => {
    return (
        <Center height={'full'}>
            <Box boxShadow={'dark-lg'} rounded={'xl'} alignItems={'center'} justifyContent={'center'} bg={Colors.gray} w={['80', '96']} h={'auto'} p={4} color='white' fontWeight={'bold'}>
                <Flex flexDirection={'column'}>
                    <Text align={'center'} marginBottom={'10'} fontSize='3xl'>
                        {title.toUpperCase()}
                    </Text>
                    {children}
                    {errors.msg && <ErrorAlert description={errors.msg} />}
                </Flex>
            </Box>
        </Center>
    )
}

export default AuthBox
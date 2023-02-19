import { Box, Center, Flex, Text, VStack } from '@chakra-ui/react'
import { Head, Link } from '@inertiajs/inertia-react'
import React from 'react'

import { Colors } from '../Colors/Colors'

const ConfirmRegister = ({ status, title, text, redirect }) => {


    return (
        <>
            <Head title='Confirm Password' />
            <Flex w={'full'} h={'full'} bg={Colors.gray} alignItems={'center'} justifyContent={'center'}>
                <Box w={'90%'} h={'90vh'} bg={Colors.blue} rounded={'xl'}>
                    <Center>
                        <VStack color={'white'}>
                            <Text fontWeight={'bold'} fontSize='3xl'>{title}</Text>
                            <Text fontSize='xl'>{text}</Text>
                            <Link href={redirect}>
                                <Text fontWeight={'bold'} color={'purple.600'} fontSize='xl'>
                                    {status == 'confirm'
                                        ? 'Clique aqui para ativar sua conta (Isso seria disparado via E-mail caso existisse um serviço de E-mail )'
                                        : 'Clique aqui para efetuar seu primeiro Login'
                                    }
                                </Text>
                            </Link>
                        </VStack>
                    </Center>
                </Box>
            </Flex>
        </>
    )
}

export default ConfirmRegister
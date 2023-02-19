import { Box, Center, Text } from '@chakra-ui/react'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import ButtonGroup from '../components/Dashboard/ButtonGroup'
import Cards from '../components/Dashboard/Cards'

import { Colors } from '../Colors/Colors';

const background = Colors.gray;

const Dashboard = ({ user }) => {
    return (
        <Box w={'full'} h={'100vh'} bg={background}>
            <Head title='Dashboard' />
            <Text
                color={'white'}
                paddingTop={'10'}
                align={'center'}
                fontSize={'4xl'}
                fontWeight={'bold'}>
                Bem-vindo {user.name}!
            </Text>
            <Cards background={background} />
            <Center paddingY={6} bg={background}>
                <ButtonGroup isAdmin={user.is_admin} />
            </Center>
        </Box>
    )
}

export default Dashboard
import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import UsersList from '../components/User/UsersList'

import {Colors} from '../Colors/Colors'

const background = Colors.gray

const Users = () => {
  return (
    <>
      <Head title='Users' />
      <Flex bg={background} w={'full'} h={'100vh'} alignItems={'center'} direction='column'>
        <VStack bg={background} w={'full'} p={'6'} spacing={6}>
          <Text color={'white'} fontSize={'4xl'} fontWeight={'bold'}>Lista de usuários</Text>
          <UsersList />
          <Button colorScheme={'red'} onClick={() => Inertia.visit('/dashboard')}>Voltar</Button>
        </VStack>
      </Flex>
    </>
  )
}

export default Users
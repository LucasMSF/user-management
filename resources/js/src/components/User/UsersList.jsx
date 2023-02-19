import { Badge, Center, HStack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BRDate } from '../../Helpers/DateHelper';
import { ApiService } from '../../Services/ApiService';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';

const UsersList = () => {
  const header = [
    'Nome',
    'E-mail',
    'Criado em',
    'Status',
    'Ações'
  ];

  const [users, setUsers] = useState([]);

  const api = new ApiService;

  const getUserList = async () => {
    setUsers(await api.callApi('user/list'));
  }

  useEffect(() => {
    getUserList()
  }, []);

  return (
    <TableContainer w={'full'} border={'4px'} boxShadow={'xl'} borderColor={'white'} rounded={'xl'}>
      <Table variant='striped'>
        <Thead>
          <Tr>
            {
              header.map((value) => <Th textAlign={'center'} color={'white'} key={value}>{value}</Th>)
            }
          </Tr>
        </Thead>
        <Tbody>
          {
            users
            && users.map((user) =>
              <Tr key={user.id}>
                <Td textAlign={'center'}>{user.name}</Td>
                <Td textAlign={'center'}>{user.email}</Td>
                <Td textAlign={'center'}>{BRDate(user.created_at)}</Td>
                <Td textAlign={'center'}>{user.blocked
                  ? <Badge colorScheme='red'>Bloqueado</Badge>
                  : <Badge colorScheme='green'>Ativo</Badge>}
                </Td>
                <Td>
                  <Center w={'full'}>
                    <HStack spacing={2}>
                      <EditUser user={user} refresh={getUserList} />
                      <DeleteUser user={user} refresh={getUserList} />
                    </HStack>
                  </Center>
                </Td>
              </Tr>
            )
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default UsersList
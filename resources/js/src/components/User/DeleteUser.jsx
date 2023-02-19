import React, { useRef } from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
    Button,
    useToast,
} from '@chakra-ui/react'
import { UserService } from '../../Services/UserService'



const DeleteUser = ({ user, refresh }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()
    const toast = useToast()

    const userService = new UserService;

    const deleteUser = async () => {
        let response = await userService.delete(user.id)

        if (response.status === 'success') {
            onClose();
            refresh();

            toast({
                title: 'Usuário excluído',
                description: `O usuário ${user.name} foi excluído`,
                position: 'top-right',
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: 'Erro ao excluir o usuário',
                description: `Não foi possível excluir o usuário ${user.name}`,
                position: 'top-right',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>
                Excluir
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Excluir usuário
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Tem certeza que deseja excluir o usuário {user.name}?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button colorScheme='red' onClick={deleteUser} ml={3}>
                                Excluir
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default DeleteUser
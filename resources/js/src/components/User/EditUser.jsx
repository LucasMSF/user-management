import React from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'

import EditUserForm from './EditUserForm'
import { useFormik } from 'formik'
import EditUserValidator from '../../Validators/Users/EditUserValidator'
import { UserService } from '../../Services/UserService'

const EditUser = ({ user, refresh }) => {
    const userService = new UserService;

    const toast = useToast();

    const formik = useFormik({
        initialValues: {
            name: user.name,
            email: user.email,
            password: '',
            blocked: user.blocked
        },
        validate: EditUserValidator,
        onSubmit: async (values) => {
            let response = await userService.edit(user.id, values);
            if (response.status === 'success') {
                onClose();
                refresh()

                toast({
                    title: 'Usuário atualizado',
                    description: `O usuário foi atualizado`,
                    position: 'top-right',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: 'Erro ao atualizar o usuário',
                    description: `Não foi possível atualizar o usuário ${user.name}`,
                    position: 'top-right',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }

        },
    })

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme={'twitter'} onClick={onOpen}>Editar</Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Editar usuário</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <EditUserForm user={user} formik={formik} />
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button form={`edit-user-${user.id}`} type='submit' isLoading={formik.isSubmitting} colorScheme='twitter'>Editar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EditUser
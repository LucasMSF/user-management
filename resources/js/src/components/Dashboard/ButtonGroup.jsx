import { Button, HStack } from '@chakra-ui/react'
import { Inertia } from '@inertiajs/inertia'
import React from 'react'

import { LogOut } from '../../Helpers/AuthHelper'

const ButtonGroup = ({isAdmin}) => {
    return (
        <HStack paddingX={10} w={'full'} spacing={2}>
            {
                isAdmin && <Button w={'full'} onClick={() => Inertia.visit('/users')} colorScheme={'twitter'}>Gerenciar usuários</Button>
            }
            <Button w={'full'} onClick={() => LogOut()} colorScheme={'red'}>Sair</Button>
        </HStack>
    )
}

export default ButtonGroup
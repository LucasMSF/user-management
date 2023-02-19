import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ApiService } from '../../Services/ApiService';
import StatsCard from '../Card/StatsCard'
import StatsCardSkeleton from '../Card/StatsCardSkeleton';

const Cards = ({ background }) => {
    const [usersStats, setUsersStats] = useState({});

    useEffect(() => {
        const api = new ApiService;
        api.callApi('user/stats')
            .then(response => {
                setUsersStats(response);
            })
    }, []);

    return (
        <Stack bg={background} p={'10'} spacing={'10'} w={'full'} direction={['column', 'column', 'row']}>
            {usersStats.users !== undefined ? <StatsCard label='Usuários' value={usersStats.users} /> : <StatsCardSkeleton />}
            {usersStats.blockedUsers !== undefined ? <StatsCard label='Usuários Bloqueados' value={usersStats.blockedUsers} /> : <StatsCardSkeleton />}
            {usersStats.deletedUsers !== undefined ? <StatsCard label='Usuários Excluídos' value={usersStats.deletedUsers} /> : <StatsCardSkeleton />}
        </Stack>
    )
}

export default Cards
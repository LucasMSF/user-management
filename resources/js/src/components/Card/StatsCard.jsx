import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const StatsCard = ({label, value /*, icon: {color, i} */}) => {
    return (
        <Card color={'white'} bg={'blue.400'} w={'full'} key='elevated' variant='elevated'>
            <CardHeader>
                <Heading size='lg'>{label}</Heading>
            </CardHeader>
            <CardBody>
                <Text fontWeight={'bold'} fontSize={'3xl'}>{value}</Text>

            </CardBody>
        </Card>
    )
}

export default StatsCard
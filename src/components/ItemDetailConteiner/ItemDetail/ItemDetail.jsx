import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Box, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'

export const ItemDetail = ({ producto }) => {

    return (
        <Box textAlign="center" border="1px" w="500px" m="auto" borderColor="green.800">
            <HStack>
                <Heading>{producto.Titulo}</Heading>
                <Spacer/>
                <Text>${producto.Precio}</Text>
            </HStack>
            <Image m="auto" src={producto.Url} w="200px" alt={producto.Titulo} />
            <Text>{producto.Descripcion}</Text>
            <Box>
                <ItemCount inicial="1" stock="10" />
            </Box>
        </Box>
    )
}

export default ItemDetail 

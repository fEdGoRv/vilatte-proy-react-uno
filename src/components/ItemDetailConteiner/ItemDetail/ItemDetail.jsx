import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Box, Heading, HStack, Image, Spacer, Text } from '@chakra-ui/react'

export const ItemDetail = ({ product }) => {

    return (
        <Box textAlign="center" border="1px" w="500px" m="auto" borderColor="green.800">
            <HStack>
                <Heading>{product.Titulo}</Heading>
                <Spacer/>
                <Text>${product.Precio}</Text>
            </HStack>
            <Image m="auto" src={product.Url} w="200px" alt={product.Titulo} />
            <Text>{product.Descripcion}</Text>
            <Box>
                <ItemCount inicial="1" stock="10" />
            </Box>
        </Box>
    )
}

export default ItemDetail 

import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Box, Heading, HStack, Image, Spacer, Text, Link } from '@chakra-ui/react'
import { ImCross } from "react-icons/im"

export const ItemDetail = ({ product }) => {

    const cambiarDisplay = () =>{
        document.querySelector(".container").style.display="none";
    }

    return (
        <Box className="container" textAlign="center" border="1px" w="500px" m="auto" borderColor="green.800">
            <HStack>
                <Heading>{product.Titulo}</Heading>
                <Text>${product.Precio}</Text>
                <Spacer/>
                <Link color="blue" w="20px" onClick={cambiarDisplay}><ImCross/></Link>
            </HStack>
            <Image m="auto" src={product.Url} w="200px" alt={product.Titulo} />
            <Text>{product.Descripcion}</Text>
            <Box>
                <ItemCount inicial={0} stock={10} />
            </Box>
        </Box>
    )
}

export default ItemDetail 

import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Box, Heading, HStack, Image, Spacer, Text, Link, Button } from '@chakra-ui/react'
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const ItemDetail = ({ product }) => {

    const [isAdded, setIsAdded] = useState(false)

    const onAdd = (contador) => {
        setIsAdded(true)
        /*product.cantidad=contador        
        console.log(product)*/
    }

    const cambiarDisplay = () => {
        document.querySelector(".container").style.display = "none";
    }

    return (
        <Box className="container" textAlign="center" border="1px" w="500px" m="auto" borderColor="green.800">
            <HStack>
                <Heading>{product.Titulo}</Heading>
                <Text>${product.Precio}</Text>
                <Spacer />
                <Link color="blue" w="20px" onClick={cambiarDisplay}><ImCross /></Link>
            </HStack>
            <Image m="auto" src={product.Url} w="200px" alt={product.Titulo} />
            <Text>{product.Descripcion}</Text>
            <Box>
                {
                    !isAdded ?
                        <ItemCount inicial={0} stock={10} onAdd={onAdd} />
                        :
                        <NavLink to="/Cart">
                            <Button size='sm' m={2} colorScheme='blue'>Ir al Carrito</Button>
                        </NavLink>
                }
            </Box>
        </Box>
    )
}

export default ItemDetail 

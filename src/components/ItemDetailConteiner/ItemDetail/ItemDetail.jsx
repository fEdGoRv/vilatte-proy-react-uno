import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Box, Heading, HStack, Image, Spacer, Text, Link, Button } from '@chakra-ui/react'
import { ImCross } from "react-icons/im"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext/CartContext'

export const ItemDetail = ({ product }) => {

    const [isAdded, setIsAdded] = useState(false)
    const {isInCart, addToCart} = useCartContext()

    const onAdd = (contador) => {
        setIsAdded(true)
        isInCart(product.Id)
        const cantidad = contador
 
        addToCart(product, cantidad)
    }

    const cambiarDisplay = () => {
        document.querySelector(".container").style.display = "none";
    }

    return (
        <Box textAlign="center" border="2px" w="500px" m="auto" borderColor="green.800" marginTop={2} px={2}  rounded="20px" overflow="hidden" boxShadow="sm">
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
                        <ItemCount inicial={1} stock={10} onAdd={onAdd} />
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

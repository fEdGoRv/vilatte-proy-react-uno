import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Box, Heading, HStack, Image, Spacer, Text, Link } from '@chakra-ui/react'
import { ImCross } from "react-icons/im"
import {useState} from 'react'
import { Cart } from '../../Navbar/CartWidget/Cart/Cart'

export const ItemDetail = ({ product }) => {

    const [productCount, setProductCount] = useState({})
    const setCount =()=>{
        setProductCount()
        console.log(setProductCount())
         //mandarAlCart()
    }
    

   /* const mandarAlCart = ({productCount, product}) =>{
        <Cart product={product} productCount={productCount} />
    }*/
    

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
                <ItemCount inicial={0} stock={10} onAdd={setCount} />
            </Box>
        </Box>
    )
}

export default ItemDetail 

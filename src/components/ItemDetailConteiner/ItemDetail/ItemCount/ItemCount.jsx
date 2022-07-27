import { HStack, Box , Button , ButtonGroup } from "@chakra-ui/react"
import { useState } from "react"
import { Cart } from "../../../Navbar/CartWidget/Cart/Cart"

const ItemCount = ({ inicial, stock }) => {

    const [contador, setContador] = useState(0)

    const aumentarConatdor = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const disminuirContador = () => {
        if (contador >= inicial) {
            setContador(contador - 1)
        }
    }
    const addOnCart = () =>{
        <Cart contador="contador"/>
    }
    console.log(contador)
    return (
        <Box>
            <HStack spacing={2}>
                <Button size='sm' m={2} colorScheme='blue' onClick={aumentarConatdor}>+</Button>
                <div>{contador}</div>
                <Button size='sm' m={2} colorScheme='blue' onClick={disminuirContador}>-</Button>
            </HStack>
            <Button onClick={addOnCart} size='sm' m={2} colorScheme='blue'>addOnCart</Button>
        </Box>
    )
}

export { ItemCount }
import { HStack, Box, Button, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Cart } from "../../../Navbar/CartWidget/Cart/Cart"
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const ItemCount = ({ inicial, stock, onAdd }) => {

    const [contador, setContador] = useState(inicial)

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
    const addOnCart = () => {
        <Cart contador="contador" />
    }
    return (
        <Box textAlign="center" margin="2">
            <HStack>
                <Button size='sm' m={2} colorScheme='blue' onClick={aumentarConatdor}><TiArrowSortedUp></TiArrowSortedUp></Button>
                <Text>{contador}</Text>
                <Button size='sm' m={2} colorScheme='blue' onClick={disminuirContador}><TiArrowSortedDown></TiArrowSortedDown></Button>
                <Button onClick={addOnCart} size='sm' m={2} colorScheme='blue'>agregarAlCart</Button>
            </HStack>
        </Box>
    )
}

export { ItemCount }
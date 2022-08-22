import { HStack, Box, Button, Text } from "@chakra-ui/react"
import { useState } from "react"
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

const ItemCount = ({ inicial, stock, onAdd }) => {
    
    const [contador, setContador] = useState(inicial)
    const mandarParametros = () =>{onAdd(contador)}

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }
    return (
        <Box textAlign="center" margin="2">
            <HStack>
                <Button size='sm' m={2} colorScheme='blue' onClick={aumentarContador}><TiArrowSortedUp /></Button>
                <Text>{contador}</Text>
                <Button size='sm' m={2} colorScheme='blue' onClick={disminuirContador}><TiArrowSortedDown /></Button>
                <Button onClick={mandarParametros} size='sm' m={2} colorScheme='blue'>agregarAlCart</Button>
            </HStack>
        </Box>
    )
}

export { ItemCount }
import { Box, Heading } from "@chakra-ui/react";
import { ItemCount } from "../ItemDetailConteiner/ItemDetail/ItemCount/ItemCount";


const ItemListConteiner = (props) => {
    console.log(props)
    return (
        <Box>
            <Heading bg="lightgreen">
                Bienvenido {props.nombre}!
            </Heading>
            <ItemCount inicial="1" stock="10" />
        </Box>
    )
}

export default ItemListConteiner;
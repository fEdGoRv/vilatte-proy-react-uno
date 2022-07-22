import { Box, Heading } from "@chakra-ui/react";

const ItemListConteiner = (props) => {
    console.log(props)
    return (
        <Box>
            <Heading bg="lightgreen">
                Bienvenido {props.nombre}
            </Heading>
        </Box>
    )
}

export default ItemListConteiner;
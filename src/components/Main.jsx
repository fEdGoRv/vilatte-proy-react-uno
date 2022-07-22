import {ChakraProvider, Heading } from "@chakra-ui/react";

const Main = (props) => {
    console.log(props)
    return (
        <ChakraProvider>
            <Heading bg="lightgreen">Bienvenido {props.nombre}</Heading>
        </ChakraProvider>
    )
}

export default Main;
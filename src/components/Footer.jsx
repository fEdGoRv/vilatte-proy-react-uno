import { Heading, ChakraProvider } from "@chakra-ui/react";
const Footer = () => {
    return (
        <ChakraProvider>
            <Heading bg="orange">
                Soy El Footer
            </Heading>
        </ChakraProvider>
    )
}


export default Footer;
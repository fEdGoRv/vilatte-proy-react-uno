import { ChakraProvider, Heading } from "@chakra-ui/react";
const Footer = () => {
    return (
        <ChakraProvider>
            <Heading bg="orange" color="white" fontWeight='bold' fontSize="3xl" mt="2" p="2" textAlign="center">
            Copyright © 2022 Fireart Studio. All rights reserved.
            </Heading>
        </ChakraProvider>
    )
}


export default Footer;
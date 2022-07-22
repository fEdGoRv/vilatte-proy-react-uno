import { Heading, ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Index";

const Header = () => {
    return (
        <ChakraProvider>
            <Heading>
                <Navbar />
            </Heading>
        </ChakraProvider>
    )
}

export default Header;
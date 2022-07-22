import { HStack, Spacer, Link } from "@chakra-ui/react";
import logo from "../../assets/flor1.jfif"

const Navbar = () => {
    return (
        <HStack bg="peru">
            <img src={logo} width="100px" alt="" />
            <Spacer />
            <HStack>
                <Link>Home</Link>
                <Link>Products</Link>
                <Link>Oferts</Link>
                <Link>Contact</Link>
            </HStack>
        </HStack>
    )
}

export { Navbar };
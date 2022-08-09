import { HStack, Spacer, Link} from "@chakra-ui/react";
import logo from "../../assets/flor.png"
import { CartWidget } from "./CartWidget/CartWidget";
import { Link as ReactRouterLink} from "react-router-dom"
const Navbar = () => {
    return (
        <HStack  bg="peru">
            <img src={logo} width="100px" alt="" />
            <Spacer />
            <HStack as="nav">
                <Link as={ReactRouterLink} to="/home" style={{textDecoration:'none'}}>Home</Link>
                <Link as={ReactRouterLink} to="/categoria1" style={{textDecoration:'none'}}>Categoria1</Link>
                <Link as={ReactRouterLink} to="/categoria2" style={{textDecoration:'none'}}>categoria2</Link>
            </HStack>
            <Spacer />
            <CartWidget />
        </HStack>
    )
}

export { Navbar };
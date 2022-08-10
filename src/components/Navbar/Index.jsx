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
                <Link as={ReactRouterLink} to="/" style={{textDecoration:'none'}}>Home</Link>
                <Link as={ReactRouterLink} to="/categoria/Yoga" style={{textDecoration:'none'}}>Yoga</Link>
                <Link as={ReactRouterLink} to="/categoria/Fitness" style={{textDecoration:'none'}}>Fitness</Link>
            </HStack>
            <Spacer />
            <CartWidget />
        </HStack>
    )
}

export { Navbar };
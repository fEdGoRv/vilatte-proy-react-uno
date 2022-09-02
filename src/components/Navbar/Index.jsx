import { HStack, Spacer, Link} from "@chakra-ui/react";
import { CartWidget } from "./CartWidget/CartWidget";
import { Link as ReactRouterLink} from "react-router-dom"
 

const Navbar = () => {
    return (
        <HStack  bg="peru">
            <img src="https://cdn-icons-png.flaticon.com/512/84/84463.png" width="100px" alt="flor"/>
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
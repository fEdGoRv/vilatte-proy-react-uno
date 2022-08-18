import { HStack, Box } from "@chakra-ui/react";
import carrito from "../../../assets/carrito.png"
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink} from "react-router-dom"
import { useCartContext } from "../../../context/CartContext/CartContext";

const CartWidget = () => {

    const {totalQuantity} = useCartContext() 

    return (
        <HStack>
            <Link as={ReactRouterLink} to="/Cart"><img src={carrito} width="100px" alt="" /></Link>
            <Box>{totalQuantity}</Box>
        </HStack>
    )
}
export { CartWidget };
import { Box } from "@chakra-ui/react";
import carrito from "../../../assets/carrito.png"
import { Link } from "@chakra-ui/react";
import { Cart } from "./Cart/Cart"

const irACart = () => {
    <Cart />
}

const CartWidget = () => {
    return (
        <Box>
            <Link><img src={carrito} onClick={irACart} width="100px" alt="" /></Link>
        </Box>
    )
}
export { CartWidget };
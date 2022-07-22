import { Box } from "@chakra-ui/react";
import carrito from "../../assets/carrito.png"
import { Link } from "@chakra-ui/react";

const Card = () => {
    return (
        <Box>
            <Link><img src={carrito} width="100px" alt="" /></Link>
        </Box>
    )
}
export { Card };
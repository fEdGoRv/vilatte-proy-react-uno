import { Box } from "@chakra-ui/react";
import carrito from "../../../assets/carrito.png"
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink} from "react-router-dom"

const CartWidget = () => {
    return (
        <Box>
            <Link as={ReactRouterLink} to="/Cart"><img src={carrito} width="100px" alt="" /></Link>
        </Box>
    )
}
export { CartWidget };
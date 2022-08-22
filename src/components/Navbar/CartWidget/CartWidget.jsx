import { HStack, Text } from "@chakra-ui/react";
import {FiShoppingCart} from "react-icons/fi"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../../context/CartContext/CartContext";

const CartWidget = () => {

    const {totalQuantity} = useCartContext() 
    
    return (
        <HStack>
            <NavLink to="/Cart"><FiShoppingCart /></NavLink>
            <Text>{totalQuantity()}</Text>
        </HStack>
    )
}
export { CartWidget };
import { Box } from "@chakra-ui/react"
import { ItemCart } from "./ItemCart/ItemCart"


const Cart = ({product}) => {
  return (
    <Box>
      <ItemCart />
    </Box>
  )
}

export { Cart }
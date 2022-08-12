import { Box } from "@chakra-ui/react"
import { ItemCart } from "./ItemCart/ItemCart"


const Cart = ({product, productCount}) => {
  /*console.log(product)
  console.log(productCount)*/
  
  return (
    <Box>
      <ItemCart product={product} productCount={productCount}/>
    </Box>
  )
}

export { Cart }
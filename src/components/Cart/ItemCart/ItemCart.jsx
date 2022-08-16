import { HStack, Box, Spacer } from "@chakra-ui/react"

export const ItemCart = ({ product, productCount }) => {
  return (
    <HStack>
      <Box width="100px">
        <img src={product.Url} alt={product.Titulo}/>
      </Box>
      <HStack>
        {product.Titulo}
        {productCount}
        <Spacer />
        {product.Precio}

      </HStack>
    </HStack>
  )
}

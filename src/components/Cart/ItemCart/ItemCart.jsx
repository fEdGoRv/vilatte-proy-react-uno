import { HStack, Box, Spacer } from "@chakra-ui/react"

export const ItemCart = ({ product }) => {
  return (
    <HStack>
      <Box width="100px">
        <img src={product.Url} alt={product.Titulo}/>
      </Box>
      <HStack>
        {product.Titulo}
        {product.cantidad}
        <Spacer />
        {product.Precio}

      </HStack>
    </HStack>
  )
}

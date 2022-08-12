import { HStack, Spacer, Text, Heading, Image } from "@chakra-ui/react"

export const ItemCart = ({product}) => {
  return (
    <HStack>
      <Image src={product.Url} w="100px" alt={product.Titulo} />
      <HStack>
        <Heading>{product.Titulo}</Heading>
        <Spacer />
        <Text>${product.Precio}</Text>
      </HStack>
      <Text>{product.Descripcion}</Text>
    </HStack>
  )
}

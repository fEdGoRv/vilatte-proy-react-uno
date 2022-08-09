import React from 'react'
import { HStack, Spacer, Text, Heading, Image } from "@chakra-ui/react"

const Cart = (product) => {
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

export { Cart }
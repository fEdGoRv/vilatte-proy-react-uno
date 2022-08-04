
import {HStack, Image, Text, Heading} from '@chakra-ui/react'

const Item = ({ product }) => {
    console.log(product)
    return (
            <HStack>
                <Heading>{product.Titulo}</Heading>
                <Text>${product.Precio}</Text>
                <Text>{product.Descripcion}</Text>
                <Image src={product.Url} w="100px" alt={product.Titulo}/>
            </HStack>
    )
}

export  {Item}
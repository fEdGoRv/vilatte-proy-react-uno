
import { HStack, Spacer, Image, Text, Heading, Button, Link, Box } from '@chakra-ui/react'
import { Link as ReactRouterLink} from "react-router-dom"

const Item = ({ product }) => {
    
    return (
        <Box border='1px' p="1" w="200px" borderColor='green.100'>
            <HStack>
                <Heading>{product.Titulo}</Heading>
                <Spacer/>
                <Text>${product.Precio}</Text>
            </HStack>
            <Text>{product.Descripcion}</Text>
            <Image src={product.Url} w="100px" alt={product.Titulo} />
            <Button colorScheme='blue' size="xs">
                <Link as={ReactRouterLink} to={`/detalle/${product.Id}`} style={{textDecoration:'none'}}>Ver Detalle</Link>
            </Button>
        </Box>
    )
}

export { Item }
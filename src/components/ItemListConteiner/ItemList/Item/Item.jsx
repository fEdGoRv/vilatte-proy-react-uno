
import { HStack, Spacer, Image, Text, Heading, Button, Link, Box} from '@chakra-ui/react'
import { Link as ReactRouterLink} from "react-router-dom"

const Item = ({ product }) => {
    
    return (
        <Box border='2px' textAlign="center" px={2} w="200px" borderColor='green.500' rounded="20px" overflow="hidden" boxShadow="sm">
            <HStack>
                <Heading>{product.Titulo}</Heading>
                <Spacer/>
                <Text>${product.Precio}</Text>
            </HStack>
            <Image src={product.Url} w="100px" m={2} alt={product.Titulo} />
            <Button color="blue.500" size="xs" m={2}>
                <Link as={ReactRouterLink} to={`/detalle/${product.Id}`} style={{textDecoration:'none'}}>Ver Detalle</Link>
            </Button>
        </Box>
    )
}

export { Item }
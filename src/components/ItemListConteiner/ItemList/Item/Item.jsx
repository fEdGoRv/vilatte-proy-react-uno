
import { HStack, Spacer, Image, Text, Heading, Button, Link, Box } from '@chakra-ui/react'
import { Link as ReactRouterLink } from "react-router-dom"

const Item = ({ product }) => {

    return (
        <Box
            textAlign="center"
            px={2} w="400px"
            borderColor='green.500'
            rounded="20px"
            overflow="hidden"
            boxShadow="sm"
            bg="gray.100"
        >
            <Image src={product.Url} w="100%" h="300px" alt="Course Cover" />
            <Box p={5}>
                <HStack>
                    <Heading>{product.Titulo}</Heading>
                    <Spacer />
                    <Text fontWeight="semibold">${product.Precio}</Text>
                </HStack>
                <Button color="blue.500" size="xs" m={2}>
                    <Link as={ReactRouterLink} to={`/detalle/${product.Id}`} style={{ textDecoration: 'none' }}>Ver Detalle</Link>
                </Button>
            </Box>
        </Box>
    )
}

export { Item }
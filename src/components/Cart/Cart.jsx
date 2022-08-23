import { HStack, Box, Spacer, Text, Button} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { ImCross } from "react-icons/im"
import { useCartContext } from "../../context/CartContext/CartContext"
import { Encabezado } from "../Encabezado/Encabezado"
import logo from "../../assets/logoAmarillo.jpg"

const Cart = () => {
 
  const { cartList, totalPrice, cleanCart, removeProduct } = useCartContext()

  if (cartList.length === 0) {
    return (
      <Box>
        <Encabezado />
        <HStack>
          <Text>
            No tenes productos en el Carrito
          </Text>
          <NavLink to='/'><Button color="blue.500">ve a nuestro Home</Button></NavLink>
        </HStack>
      </Box>
    )
  }

  return (
    <Box>
      <Encabezado Abatar={logo} Titulo="Revisa tu compra!" Subtitulo="Tu conformidad es nuestro objetivo!" />
      {cartList.map(product =>
        <HStack key={product.Id} border="2px" w="800px" m={1} p={2} rounded="20px" >
          <Box width="100px" marginRight={2}>
            <img src={product.Url} alt={product.Titulo} />
          </Box>
          <HStack>
            <Text as="b">{product.Titulo}</Text>
            <Text as="b">Cantidad : {product.Cantidad}</Text>
            <Spacer />
            <Text as="b">Precio por unid.: ${product.Precio}</Text>
          </HStack>
          <Spacer />
          <Button color="blue.500" onClick={() => removeProduct(product.Id)}><ImCross /></Button>
        </HStack>)}

      <Text as="b">Monto total de la compra: ${totalPrice()}</Text>
      <Box>
        <Button color="blue.500" onClick={() => cleanCart()}>Vaciar carrito</Button>
      </Box>
    </Box>
  )
}

export { Cart }
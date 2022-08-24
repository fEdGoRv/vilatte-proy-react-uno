import { Encabezado } from "../Encabezado/Encabezado"
import { Box, Button, Input, Stack, FormControl, Heading } from "@chakra-ui/react"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext/CartContext"

export const CheckOut = () => {
    const [customer, setCustomer] = useState({
        name: '',
        surname: '',
        email: '',
        adress: ''
    })

    const { totalPrice, cartList } = useCartContext()

    const handlerChangeInput = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        const order = {
            item: cartList,
            buyer: { ...customer },
            price: totalPrice()
        }
         formCleaner()
        {console.log(order)}
    }

    const formCleaner = () =>{
        for (let k=0; k<4; k++){
       document.querySelectorAll(".field")[k].value="";
        }
    }

    return (
        <Box>
            <Encabezado />
            <Heading p={2} bg="lightblue">Complete sus datos :)</Heading>
            <FormControl  >
               <form onSubmit={handlerSubmit} >
                <Stack spacing={3}>
                    <Input variant="filled" maxWidth="900px" placeholder='Nombre' name='name' value={customer.name} onChange={handlerChangeInput} className="field" />
                    <Input variant="filled" maxWidth="900px" placeholder='Apellido' name='surname' value={customer.surname} onChange={handlerChangeInput} className="field" />
                    <Input type="email" variant="filled" maxWidth="900px" placeholder='Email' name='email' value={customer.email} onChange={handlerChangeInput} className="field" />
                    <Input variant="filled" maxWidth="900px" placeholder='Direccion' name='adress' value={customer.value} onChange={handlerChangeInput} className="field" />
                </Stack>
                <Button m={2} type="submit" color="blue.500"  >Finalizar orden</Button>
                </form>
            </FormControl>
        </Box>
    )
}

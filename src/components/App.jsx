import Header from "./Header"
import Footer from "./Footer"
import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./Main/Main";
import { CartContextprovider } from "../context/CartContext/CartContext"
import "../firebase/Firebase"

function App() {
    return (
        <ChakraProvider>
            <CartContextprovider>
                <Header />
                <Main />
                <Footer />
            </CartContextprovider>
        </ChakraProvider>
    )
}
export default App;
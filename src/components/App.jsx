import Header from "./Header"
import Footer from "./Footer"
import { ChakraProvider } from "@chakra-ui/react";
import ItemListConteiner from "./ItemListConteiner/ItemListConteiner";
import  {ItemDetailConteiner}  from "./ItemDetailConteiner/ItemDetailConteiner"

function App() {
    return (
        <ChakraProvider>
            <Header />
            <ItemListConteiner nombre="Fede" />
            <ItemDetailConteiner/>
            <Footer />
        </ChakraProvider>
    )
}
export default App;
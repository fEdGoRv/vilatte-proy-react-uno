import Header from "./Header"
import Footer from "./Footer"
import { ChakraProvider } from "@chakra-ui/react";
import ItemListConteiner from "./ItemListConteiner/ItemListConteiner";


function App() {
    return (
        <ChakraProvider>
            <Header />
            <ItemListConteiner nombre="Fede"/>
            <Footer />
        </ChakraProvider>
    )
}
export default App;
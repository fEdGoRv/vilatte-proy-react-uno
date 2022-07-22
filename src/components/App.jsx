import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <ChakraProvider>
            <Header />
            <Main nombre="Fede"/>
            <Footer />
        </ChakraProvider>
    )
}
export default App;
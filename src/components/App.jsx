import Header from "./Header"
import Footer from "./Footer"
import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./Main/Main";

function App() {
    return (
        <ChakraProvider>
            <Header />
            <Main />
            <Footer />
        </ChakraProvider>
    )
}
export default App;
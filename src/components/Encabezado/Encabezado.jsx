import { Heading, HStack, Box } from "@chakra-ui/react"

export const Encabezado = ({ Titulo, Subtitulo, Abatar }) => {

    return (
        <Heading bgColor="lightgreen" p="2">
            <HStack>
                  <img src={Abatar} width="80px"/>
                <Box>
                    <Box>
                        <h2>{Titulo}</h2>
                    </Box>
                    <Box>
                        <h6>{Subtitulo}</h6>
                    </Box>
                </Box>
            </HStack>
        </Heading>
    )
}

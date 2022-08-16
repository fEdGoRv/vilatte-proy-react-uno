import { Center, WrapItem, Wrap } from '@chakra-ui/react'
import { Audio, BallTriangle } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <Wrap spacing='100px' justify='center'>
            <WrapItem>
                <Center>
                    <BallTriangle color="#00BFFF" height={80} width={80} />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color='green'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    />
                </Center>
            </WrapItem>


        </Wrap>

    )
}

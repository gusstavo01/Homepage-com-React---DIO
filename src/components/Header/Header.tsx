import './Header.css'
import { ChakraProvider, Text, Center } from '@chakra-ui/react'
export const Header = () => {
    return (
        <ChakraProvider>
        <div className='header'>
            <Center>
                <Text fontSize='4xl'>GA Bank</Text>
            </Center>
            
        </div>
        </ChakraProvider>
    )
}
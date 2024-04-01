import  MyButton  from '../MyButton/Button';
import { Welcome } from '../../services/boas-vindas';
import { 
    ChakraProvider, 
    Input,
    Box,
    Center
   } from '@chakra-ui/react'
interface ICard {
    id: number
    paragraph: string
    details: string
}

export const Card = () =>{
    return (
       
      <ChakraProvider>
      
          <Box minHeight='100vh' backgroundColor='#1e88e5' padding='25px'>
            <Box bg='white' borderRadius='25px' padding='15px'> 
              <Center><h3>Faça o login</h3></Center>
              <Input placeholder="Email"/>
              <Input placeholder="Password"/>
              <Center><MyButton onClick={Welcome} children={'Enviar'}/></Center>
              
            </Box>
           
          
          </Box> 
             
   
      </ChakraProvider>
    )
}
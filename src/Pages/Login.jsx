import React, { useState } from 'react';
import {
    FormLabel,
    Input,
    Button,
    Heading,
    Box,
    Flex,
    Image,
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserData } from '../Redux/Auth/action';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const users = useSelector((store)=> store.authReducer.users);
    console.log(users);
    const toast = useToast()

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = () => {
      const newUser = {
        email: email,
        password: password,
      }

      console.log(newUser);

       dispatch(loginUserData(newUser)).then(()=>{
        toast({
          title: 'Login Success',
          description: "You have successfully logged in",
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        navigate("/")
       })
       .catch(()=>{
        toast({
          title: 'Login failed.',
          description: 'Invalid username or password. Please try again.',
          status: 'error',
          duration: 6000,
          isClosable: true,
        })
       });


      
      
    }


 



  return (
   
            <Box   w={{base:"80%",sm:"80%", md:"50%", lg:"35%" }} m={"auto"} mt={"8"} border='1px' borderColor='gray.400'
       p={5} borderRadius={10} >
      
       <Heading  mt={2} mb={2} size={"md"}> LOGIN </Heading>
       <FormLabel> Email</FormLabel>
       <Input name='email' type='email' value={email} w={"95%"} onChange={(e)=>{setEmail(e.target.value)}}/>
       <FormLabel> Password</FormLabel>
       <Input name='password' type='password' value={password} w={"95%"}  onChange={(e)=>{setPassword(e.target.value)}}/>
       <br />
       <Button w={"95%"} backgroundColor={"#49caf1"} textColor={"white"}
        mt={4} onClick={handleSubmit}> Submit </Button>
       </Box>

 
  )
}

export default Login
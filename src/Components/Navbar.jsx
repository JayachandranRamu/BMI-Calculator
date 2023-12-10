import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {

    const users = useSelector((store)=> store.authReducer.users);
    console.log(users);
    const token = localStorage.getItem('token');
    const [flag, setFlag] = useState(false)
    console.log(token);

    const handleLogout = () => {
        localStorage.clear();
        setFlag(true);
        alert('Logged out Successfully');
      };


  useEffect(()=>{

  },[flag])    

  return (
    <Box display={"flex"} h={12} alignItems="center" justifyContent="space-around"  backgroundColor={"#49caf1"} >
        {/* <Box w={"5%"} >
        <Link to={"/"}> <Image w={"90%"} src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/botkxkgeprx40g5rnrku.png' alt='logo'/> </Link>
        </Box> */}
        <Box >
        <Link style={{textDecoration:"none"}} to={"/"}> Home </Link>
        </Box>
        <Box >
        <Link to={"/history"}> BMI History </Link>
        </Box>
        
       
        {token ? (
         
        <>  
          <Box display={{base:'none'}}>
            <Link >Hello, {users.username}</Link>
          </Box>
          <Box >
          {/* <Link to="/profile">
              <Image
                src={users.avatar}
                alt={`Profile Image of ${users.username}`}
                borderRadius="full"
                boxSize="40px"
                objectFit="cover"
                mr={2}
              />
            </Link> */}
          </Box>
          <Box >
          <Link to={"/profile"}> Profile </Link>
           </Box>
          <Box>
            <Link > <Button  m={4}  onClick={handleLogout}> Logout </Button> </Link>
          </Box>
        </>
          
      ) : (
        <>
          <Box>
            <Link to="/login">Login</Link>
          </Box>
          <Box>
            <Link to="/register">Register</Link>
          </Box>
        </>
      )}  
        
    </Box>
  )
}

export default Navbar
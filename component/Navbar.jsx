import NavbarStyle from '../styles/Navbar.module.css'
import { FaHome,FaUser } from 'react-icons/fa';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdAccountCircle } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiUserPlus,FiMail } from 'react-icons/fi';
import axios from 'axios';
import * as yup from "yup"
import {
    Menu,InputLeftAddon,
    MenuButton,InputGroup,useToast,
    MenuList,ModalBody,Input,InputRightElement,
    MenuItem,ModalHeader,ModalCloseButton,
    MenuItemOption,ModalContent,
    MenuGroup,Modal,ModalOverlay,
    MenuOptionGroup,useDisclosure,
    MenuDivider,Button,Flex,Image,Text
  } from '@chakra-ui/react'
import { useState } from 'react';


function Navbar(){
 
  const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()


    const UserSchema = yup.object().shape({
      Username: yup.string().required('Username is required'),
      Email: yup.string().required('Email is required'),
      Password: yup.string().required('Password is required'),
      Passwordcomf: yup.string().required('Password comfairm is required').oneOf([yup.ref('Password')], 'Passwords does not match'),
    });

    const Loginform = yup.object().shape({
      Email: yup.string().required('Email is required'),
      Password: yup.string().required('Password is required'),
    });


    const Forgetpass= yup.object().shape({
      Email: yup.string().required('Email is required'),
    });


    const { register:registerSingup, handleSubmit:handleSubmitSingup, formState: { errors:errorsSingup }, reset:resetSingup } = useForm({
      resolver: yupResolver(UserSchema),
    });

    const { register:registerLogin, handleSubmit:handleSubmitLogin, formState: { errors:errorsLogin }, reset:resetLogin } = useForm({
      resolver: yupResolver(Loginform),
    });

    const { register:registerForgetpass, handleSubmit:handleSubmitForgetpass, formState: { errors:errorsForgetpass}, reset:resetForgetpass } = useForm({
      resolver: yupResolver(Forgetpass),
    });

    const onSubmitHandlerSingup = (data) => { 
      
      axios({
          method: 'post',
          url: `http://localhost:5000/singuplocal`,
          data: data,
        })
      .then(function (response) {
          console.log(response);
          if(response.data=="User Created"){ toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })}
        }).catch(function (error) {
          console.log(error);
        }) 
    };


    const onSubmitHandlerLogin = (data) => { 
      
      axios({
          method: 'post',
          url: `http://localhost:5000/Loginlocal`,
          data: data,
        })
      .then(function (response) {
          console.log(response);
          if(response.data=="login"){ toast({
            title: 'You login.',
            description: "We've Login to your account.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })}
        }).catch(function (error) {
          console.log(error);
        }) 
    };


    const onSubmitHandlerForgetpass = (data) => { 
      
      axios({
          method: 'post',
          url: `http://localhost:5000/forgetpasswordrequest`,
          data: data,
        })
      .then(function (response) {
          console.log(response);
          if(response.data=="Password request sent"){ toast({
            title: 'Password request',
            description: "We've sent forget password request to your Email.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })}
        }).catch(function (error) {
          console.log(error);
        }) 
    };

 
const [ formpage , SetFormpage ] = useState("singup")

const [ forgetpass , SetForgetpass ] = useState()

    return(
        <div>
<Flex justifyContent="space-around" alignItems="center" height="2.6rem" width="100%" background="#eff2f9" borderBottomRadius="25px" position="fixed" zIndex="999" boxShadow='0 5px 10px 1px rgba(126, 126, 126, 0.238)'>
<Flex justifyContent="space-around" alignItems="center" width="40%" height="100%" >  <Flex cursor="pointer" fontSize='0.8rem' >ABOUT US</Flex>   <Flex cursor="pointer" fontSize='0.8rem'>CATEGORY</Flex>  </Flex>
<Flex><Image src="logoSmart.png" height="2rem" width="2rem"  /></Flex>
<Flex justifyContent="space-around" alignItems="center" width="40%" height="100%"  >

<Flex cursor="pointer" fontSize='0.8rem' >CREATE</Flex>  


 <Flex alignItems="center" cursor="pointer" width="6rem" height="2rem" background="#1e90ff" borderRadius="50px" _hover={{background:"#166dc48c"}} >
<MdAccountCircle style={{ height:"1.8rem", width:"1.8rem",color:'white'}}  />
<Text marginLeft="0.1rem" onClick={onOpen} color='white' fontSize='0.8rem' >SingUP</Text>
 </Flex>

</Flex>
</Flex>



<Modal isOpen={isOpen} onClose={onClose}>
<ModalOverlay />
<ModalContent>

{formpage == "singup" &&

<>
  <ModalHeader  className={NavbarStyle.signup} color='whitesmoke' fontSize='1rem'>SingUP Form</ModalHeader>
  <ModalCloseButton />
  <ModalBody className={NavbarStyle.signup} >

  <InputGroup marginBottom="0.7rem"> 
   
     <Input  isInvalid={errorsSingup.Username ? true : false } {...registerSingup("Username")} zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
     <InputRightElement pointerEvents='none' children={<FiUserPlus style={{width:"1.25rem" , height:"1.25rem"}} color='whitesmoke'/>}  />
     <Flex className="inputflushlable" position="absolute" left="0" bottom="0" color='whitesmoke' fontSize='0.8rem'>{errorsSingup.Username ? <p>{errorsSingup.Username.message}</p> : "Name" }</Flex>

    </InputGroup> 


    <InputGroup marginBottom="0.7rem"> 
   
   <Input {...registerSingup("Email")} zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
   <InputRightElement   pointerEvents='none' children={<FiMail style={{width:"1.25rem" , height:"1.25rem"}} color='whitesmoke'/>}  />
   <Flex className="inputflushlable" position="absolute" left="0" bottom="0" color='whitesmoke' fontSize='0.8rem'>{errorsSingup.Email ? <p>{errorsSingup.Email.message}</p> : "Email" }</Flex>

  </InputGroup>

  <InputGroup marginBottom="0.7rem"> 
   
     <Input {...registerSingup("Password")}  zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
     <InputRightElement  pointerEvents='none' children={<RiLockPasswordLine style={{width:"1.25rem" , height:"1.25rem"}} color='whitesmoke'/>}  />
     <Flex className="inputflushlable" position="absolute" left="0" bottom="0" color='whitesmoke' fontSize='0.8rem'> {errorsSingup.Password ? <p>{errorsSingup.Password.message}</p> : "Password" }</Flex>

    </InputGroup>

    <InputGroup marginBottom="0.7rem"> 
   
   <Input {...registerSingup("Passwordcomf")} zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
   <InputRightElement   pointerEvents='none' children={<RiLockPasswordLine style={{width:"1.25rem" , height:"1.25rem"}} color='whitesmoke'/>}  />
   <Flex className="inputflushlable" position="absolute" left="0" bottom="0" color='whitesmoke' fontSize='0.8rem'>{errorsSingup.Passwordcomf ? <p>{errorsSingup.Passwordcomf.message}</p> : "Password comfairm" }</Flex>

  </InputGroup>

<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="4rem" onClick={handleSubmitSingup(onSubmitHandlerSingup)} fontSize='0.8rem'>SingUP</Button>
<Button margin="0.5rem" background="#8860d0"  width="4rem" onClick={()=> SetFormpage("login")  } fontSize='0.8rem'>Login</Button>
</Flex>

<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="8rem" onClick={()=> SetFormpage("social")  } fontSize='0.8rem'>social media Login</Button>
</Flex>

  </ModalBody>

</>

}

{formpage == "login" && 

<>
  <ModalHeader  className={NavbarStyle.signup} color='whitesmoke' fontSize='1rem' >Login Form</ModalHeader>
  <ModalCloseButton />
  <ModalBody className={NavbarStyle.signup} >



    <InputGroup marginBottom="0.7rem"> 
   
   <Input {...registerLogin("Email")} zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
   <InputRightElement   pointerEvents='none' children={<FiMail style={{width:"1.25rem" , height:"1.25rem"}} />}  color='whitesmoke'/>
   <Flex className="inputflushlable" position="absolute" left="0" bottom="0" color='whitesmoke' fontSize='0.8rem'>{errorsLogin.Email ? <p>{errorsLogin.Email.message}</p> : "Email" }</Flex>

  </InputGroup>

  <InputGroup marginBottom="0.7rem"> 
   
     <Input {...registerLogin("Password")}  zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
     <InputRightElement  pointerEvents='none' children={<RiLockPasswordLine style={{width:"1.25rem" , height:"1.25rem"}} color='whitesmoke'/>}  />
     <Flex className="inputflushlable" position="absolute" left="0" bottom="0" color='whitesmoke' fontSize='0.8rem'> {errorsLogin.Password ? <p>{errorsLogin.Password.message}</p> : "Password" }</Flex>

    </InputGroup>


<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="4rem" onClick={handleSubmitLogin(onSubmitHandlerLogin)} fontSize='0.8rem'>Login</Button>
<Button margin="0.5rem" background="#8860d0"  width="4rem" onClick={()=> SetFormpage("singup")  } fontSize='0.8rem'>SingUp</Button>
</Flex>

<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="8rem" onClick={()=> SetFormpage("social")  } fontSize='0.8rem' >social media Login</Button>
</Flex>

<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="7rem" onClick={()=> SetFormpage("forgetpass")  } fontSize='0.8rem' >Forget password</Button>
</Flex>




  </ModalBody>

</>

}

{formpage == "social" && 

<>
  <ModalHeader  className={NavbarStyle.signup} color='whitesmoke' fontSize='1rem'>Social media login</ModalHeader>
  <ModalCloseButton />
  <ModalBody className={NavbarStyle.signup} >



<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="4rem" onClick={()=> SetFormpage("login")  } fontSize='0.8rem'>Login</Button>
<Button margin="0.5rem" background="#8860d0"  width="4rem" onClick={()=> SetFormpage("singup")  } fontSize='0.8rem'>SingUp</Button>
</Flex>



  </ModalBody>

</>

}

{formpage == "forgetpass" && 

<>
  <ModalHeader  background="#1e90ff" >Forget password</ModalHeader>
  <ModalCloseButton />
  <ModalBody background="#1e90ff" >

  <InputGroup marginBottom="0.7rem"> 
   
   <Input {...registerForgetpass("Email")} zIndex="1" errorBorderColor='crimson' className="inputflush" variant='flushed' autocomplete="off" required type="text"  /> 
   <InputRightElement   pointerEvents='none' children={<FiMail style={{width:"1.5rem" , height:"1.5rem"}} />}  />
   <Flex className="inputflushlable" position="absolute" left="0" bottom="0" >{errorsForgetpass.Email ? <p>{errorsForgetpass.Email.message}</p> : "Email" }</Flex>

  </InputGroup>

  <Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="10rem" onClick={handleSubmitForgetpass(onSubmitHandlerForgetpass)}   >Request</Button>
</Flex>



<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="6rem" onClick={()=> SetFormpage("login")  } >Login</Button>
<Button margin="0.5rem" background="#8860d0"  width="6rem" onClick={()=> SetFormpage("singup")  } >SingUp</Button>
</Flex>

<Flex  justifyContent="space-around" alignItems="center" width="100%">
<Button margin="0.5rem" background="#8860d0"  width="10rem" onClick={()=> SetFormpage("social")  }  >social media Login</Button>
</Flex>


  </ModalBody>

</>

}



</ModalContent>
</Modal>
</div>

    )
}
export default Navbar;


{/* <Menu>
<MenuButton colorScheme='blue'>
<Button>ahmad</Button>
</MenuButton>

<MenuList  background="#1e90ff" Width='3rem'>

<MenuItem  icon={<MdAccountCircle style={{width:"2rem",height:"2rem"}} />}  >Menu 1</MenuItem>
<MenuDivider />
<MenuItem  icon={<MdAccountCircle style={{width:"2rem",height:"2rem"}} />}  >Menu 1</MenuItem>
<MenuDivider />
<MenuItem  icon={<MdAccountCircle style={{width:"2rem",height:"2rem"}} />}  >Menu 1</MenuItem>
<MenuDivider />
<MenuItem  icon={<MdAccountCircle style={{width:"2rem",height:"2rem"}} />}  >Menu 1</MenuItem>


</MenuList>
</Menu> */}


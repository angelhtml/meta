import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

import {
  Drawer,
  DrawerBody,Text,
  DrawerFooter,Divider,Image,
  DrawerHeader,InputRightAddon,
  DrawerOverlay,InputGroup,InputLeftAddon,
  DrawerContent,Button,Input,Flex,
  DrawerCloseButton,useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti'
import { IoResize,IoBookmarkOutline,IoBookmarkSharp } from 'react-icons/io5'
import { ImPriceTag } from 'react-icons/im'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
function App(){

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [fillheart, setFillheart] = useState(false)
  const [bookmark, setBookmark] = useState(false)
const[text,setText]=useState()


  return (
    <>
      <Navbar />


      <Flex  width="100%" height="2rem" ></Flex>



<Flex  marginTop="2rem" width="100%" minHeight="29rem" height="80vh"  >



<Flex display={{base:"none" , padS:"flex"}} wrap="wrap"  borderTopLeftRadius="50px" width="9rem" minHeight="29rem" height="80vh" backgroundColor="#36c6ff">

<Flex  justifyContent="space-around" alignItems="center" borderTopLeftRadius="50px" width="9rem" height="2.5rem" background="rgb(25, 121, 216)" > <Text fontSize="1rem" color="white">Filters </Text>  </Flex>


<Flex wrap="wrap" alignContent="flex-start" justifyContent="space-around" borderBottomRightRadius="25px" width="9rem" minHeight="27rem" height="calc( 80vh - 5rem )" background="#36c6ff" boxShadow='8px 0px 16px 5px rgba(0, 0, 0, 0.15)' >

<Text marginTop="1rem" > Price </Text>

<InputGroup height="1.8rem" marginTop="0.5rem" width="8.5rem">
    <InputLeftAddon height="1.4rem" padding="0.2rem" width="2rem" fontSize="0.7rem" children='MAX' />
    <Input height="1.4rem" padding="0.2rem" background="white" placeholder='99999' fontSize='0.8rem' />
  </InputGroup>

  <InputGroup height="1.8rem" marginTop="0.5rem" width="8.5rem">
    <InputLeftAddon height="1.4rem" padding="0.2rem" width="2rem" fontSize="0.7rem" children='MIN' />
    <Input height="1.4rem" padding="0.2rem" background="white" placeholder='0' fontSize='0.8rem' />
    
  </InputGroup>

  <Divider  margin="1rem" />

<Text> Size </Text>

  <InputGroup height="1.8rem" marginTop="0.5rem" width="8.5rem">
    <InputLeftAddon height="1.4rem" padding="0.2rem" width="2rem" fontSize="0.7rem" children='MAX' />
    <Input height="1.4rem" padding="0.2rem" background="white" placeholder='99999' fontSize='0.8rem' />
 
  </InputGroup>

  <InputGroup height="1.8rem" marginTop="0.5rem" width="8.5rem">
    <InputLeftAddon height="1.4rem" padding="0.2rem" width="2rem" fontSize="0.7rem" children='MIN' />
    <Input height="1.4rem" padding="0.2rem" background="white" placeholder='0' fontSize='0.8rem' />
  </InputGroup>

  <Divider  marginTop="1rem" />


</Flex>

</Flex>



<Flex  wrap="wrap" width="full" height="100%" >

<Flex borderTopLeftRadius={{base:"50px" , padS:"none"}} borderTopRightRadius="50px" width="100%" height="2.5rem" background="rgb(25, 121, 216)" boxShadow='0px 8px 16px 5px rgba(0, 0, 0, 0.15),-4px 0px 10px 0px rgba(0, 0, 0, 0.15)'>



</Flex>



<Flex overflowY="scroll" wrap="wrap" width="100%" justifyContent="space-around"  minHeight="24rem" height="calc( 80vh - 5rem )"  >

<Flex style={{boxShadow:'0px 8px 16px 5px rgba(0, 0, 0, 0.15),0px -8px 12px 5px rgba(255, 255, 255, 1)'}} wrap="wrap" position="relative" borderRadius="10px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem"  >

<Flex width="100%" height="45%" background="orange" ><Image  src="10409scottage.jpg" width="100%" height="100%" /></Flex>

<Flex  width="100%"  bottom="30%" position="absolute" height="22%" justifyContent="space-around" right='40%'> <FaUserAlt style={{fontSize:'0.75rem',color:'#36c6ff'}}/> <Text fontSize='0.8rem' position='absolute' right='21%' fontWeight='450'> Jack32 </Text> </Flex>
<Flex  width="100%"  bottom="20%" position="absolute" height="22%" justifyContent="space-around" right='0%' > <TiLocationOutline style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'5%'}}/> <Text fontSize='0.7rem' paddingLeft='1.7rem'> Chicago 10409 S Cottage Grove Ave </Text>  </Flex>
<Flex  width="100%"  bottom="10%" position="absolute" height="17%" justifyContent="space-around" right='0%' > <IoResize style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'5%'}}/> <Text fontSize='0.7rem' position='absolute' left='16%' style={{wordSpacing:'0.25rem'}}> 37 up^2  </Text>  </Flex>
<Flex  width="100%"  bottom="0" position="absolute" height="17%" justifyContent="space-around"   right='0%'> <ImPriceTag style={{fontSize:'0.75rem',color:'#36c6ff',position:'absolute',left:'5%'}}/><Text fontSize='0.7rem' position='absolute' left='16%' style={{wordSpacing:'0.25rem',fontWeight:'450'}}> 100000 UPX  </Text>  </Flex>
<Flex  width="100%"  bottom="0" position="absolute" height="9%" justifyContent="space-around"   right='0%'><div onClick={()=> setFillheart(!fillheart)} style={{zIndex:'1'}}>{fillheart ? <AiFillHeart style={{fontSize:'1rem',color:'red',position:'absolute',left:'5%'}}/> : <AiOutlineHeart style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'5%'}}/>}</div><Text fontSize='0.7rem' position='absolute' left='16%' style={{wordSpacing:'0.25rem',fontWeight:'450'}}> 9999 </Text></Flex>
<Flex  width="100%"  bottom="0" position="absolute" height="9%" justifyContent="space-around"   right='0%'><div onClick={()=> setBookmark(!bookmark)} style={{zIndex:'1'}}>{bookmark ? <IoBookmarkSharp style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'85%'}}/> : <IoBookmarkOutline style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'85%'}}/>}</div></Flex>

</Flex>

<Flex style={{boxShadow:'0px 8px 16px 5px rgba(0, 0, 0, 0.15),0px -8px 12px 5px rgba(255, 255, 255, 1)'}} wrap="wrap" position="relative" borderRadius="10px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem"  >

<Flex width="100%" height="45%" background="orange" ><Image  src="elizabethst.JPG" width="100%" height="100%" /></Flex>

<Flex  width="100%"  bottom="30%" position="absolute" height="22%" justifyContent="space-around" right='40%'> <FaUserAlt style={{fontSize:'0.75rem',color:'#36c6ff'}}/> <Text fontSize='0.8rem' position='absolute' right='21%' fontWeight='450'> Jack32 </Text> </Flex>
<Flex  width="100%"  bottom="20%" position="absolute" height="22%" justifyContent="space-around" right='0%' > <TiLocationOutline style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'5%'}}/> <Text fontSize='0.7rem' paddingLeft='1.7rem'> Chicago 10409 S Cottage Grove Ave </Text>  </Flex>
<Flex  width="100%"  bottom="10%" position="absolute" height="17%" justifyContent="space-around" right='0%' > <IoResize style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'5%'}}/> <Text fontSize='0.7rem' position='absolute' left='16%' style={{wordSpacing:'0.25rem'}}> 37 up^2  </Text>  </Flex>
<Flex  width="100%"  bottom="0" position="absolute" height="17%" justifyContent="space-around"   right='0%'> <ImPriceTag style={{fontSize:'0.75rem',color:'#36c6ff',position:'absolute',left:'5%'}}/><Text fontSize='0.7rem' position='absolute' left='16%' style={{wordSpacing:'0.25rem',fontWeight:'450'}}> 9999999999 UPX  </Text>  </Flex>
<Flex  width="100%"  bottom="0" position="absolute" height="9%" justifyContent="space-around"   right='0%'><div onClick={()=> setFillheart(!fillheart)} style={{zIndex:'1'}}>{fillheart ? <AiFillHeart style={{fontSize:'1rem',color:'red',position:'absolute',left:'5%'}}/> : <AiOutlineHeart style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'5%'}}/>}</div><Text fontSize='0.7rem' position='absolute' left='16%' style={{wordSpacing:'0.25rem',fontWeight:'450'}}> 9999 </Text></Flex>
<Flex  width="100%"  bottom="0" position="absolute" height="9%" justifyContent="space-around"   right='0%'><div onClick={()=> setBookmark(!bookmark)} style={{zIndex:'1'}}>{bookmark ? <IoBookmarkSharp style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'85%'}}/> : <IoBookmarkOutline style={{fontSize:'1rem',color:'#36c6ff',position:'absolute',left:'85%'}}/>}</div></Flex>

</Flex>

<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>

<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>

<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>
<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" background="gold" ></Flex>

</Flex>


</Flex>

</Flex>



<Footer/>





    </>
  )
}
export default App



  
{/* <Button  colorScheme='teal' onClick={onOpen}>
Open
</Button>
<Drawer
isOpen={isOpen}
placement='left'
onClose={onClose}

>
<DrawerOverlay />
<DrawerContent>
  <DrawerCloseButton />
  <DrawerHeader>Create your account</DrawerHeader>

  <DrawerBody>
    <Input onChange={e=>setText(e.target.value) } value={text} placeholder='Type here...' />
  </DrawerBody>

  <DrawerFooter>
    <Button variant='outline' mr={3} onClick={onClose}>
      Cancel
    </Button>
    <Button colorScheme='blue'>Save</Button>
  </DrawerFooter>
</DrawerContent>
</Drawer> */}
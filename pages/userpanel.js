
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

import { Tabs, TabList, TabPanels, Tab, TabPanel,Flex,AspectRatio  } from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,Text,
  AccordionPanel,Avatar,
  AccordionIcon,Box,Image,
} from '@chakra-ui/react'

import { BsFillCollectionFill,BsFillBookmarkFill } from 'react-icons/bs';

import { BiPlus } from 'react-icons/bi'




function App(){













  return (
    <>
      <Navbar />

<Flex height="2.7rem" ></Flex>


<AspectRatio  width="100%" ratio={{ base:6/2 , padS:6/1}}>
<Image src='herouser.jpg' alt='naruto' objectFit='cover' />
</AspectRatio>

<Flex justifyContent="space-between" width="100%" height="7rem" background="indigo" >

<Flex width="42%" height="100%" background="lavender"   ></Flex>
<Flex justifyContent="center" width="6rem" height="100%" background="orange.200" >

<Flex zIndex="5" marginTop="-2.5rem" borderRadius="50%" width="6rem" height="6rem" background="maroon" ></Flex>

</Flex>

<Flex width="42%" height="100%" background="lime"   ></Flex>


</Flex>

<Flex width="100%" height="2rem" background="pink" >


<Flex marginRight="0.1rem" marginLeft="0.1rem" width="8rem" height="100%" background="orchid" alignItems="center" > <Text margin="0.5rem" >Collection</Text> <BsFillCollectionFill/> </Flex>
<Flex marginRight="0.1rem" marginLeft="0.1rem" width="8rem" height="100%" background="orchid" alignItems="center" > <Text margin="0.5rem" >Bookmarks</Text> <BsFillBookmarkFill/> </Flex>


</Flex>

<Flex width="100%"  >

<Flex  height="31rem" width="10rem"  background="gold" >        

<Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Profile
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


</Flex>

<Flex alignItems="flex-start"  width="full" height="31rem"  >


<Flex borderRadius="25px" margin="0.5rem" width="11rem" minWidth="267px" minHeight="350px" height="17rem" boxShadow='0px 8px 16px 5px rgba(0, 0, 0, 0.15),-4px 0px 10px 0px rgba(0, 0, 0, 0.15)' ><BiPlus color='#c2c2c2' style={{marginLeft:"32%",marginTop:"55%",fontSize:"4rem"}}/></Flex> 




</Flex>


</Flex>


      <Footer />

    </>
  )
}
export default App



  
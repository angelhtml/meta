import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,Box,Flex,Center,Image} from '@chakra-ui/react'
import FooterStyle from '../styles/footer.module.css'
function Section1(){
    return(
        <>
            <Box width="100%" marginTop="3rem" borderTop='white solid 1px' className={FooterStyle.footer} marginTop='3rem'>
      <Accordion  allowMultiple >
  <AccordionItem>
   
      <AccordionButton>

        <Flex justifyContent="center" width="100%" fontSize='0.9rem' textShadow='0px 1px 1px #8a8a8a' color='white'>
        FAQs
        <AccordionIcon />
        </Flex>
    
        </AccordionButton>

    <AccordionPanel pb={4} fontSize='0.8rem'>

    <Accordion  allowMultiple marginTop='1.5rem' marginBottom='1.5rem'>
    <AccordionItem width='85%' marginLeft='7%'><AccordionButton  fontSize='0.85rem' textShadow='0px 1px 1px black' color='white'><div textAlign='left'>What is Landscapes X?<AccordionIcon style={{position:'absolute',left:'82%'}}/></div></AccordionButton><AccordionPanel pb={4} fontSize='0.72rem' color='white' textShadow='0px 1px 1px black'>-The landscapes X is a platform for metaverse that you can Register your lands and items for sale them or share it to each other</AccordionPanel></AccordionItem>
    <AccordionItem width='85%' marginLeft='7%'><AccordionButton  fontSize='0.85rem' textShadow='0px 1px 1px black' color='white'><div textAlign='left'>Dose Landscapes X is free?<AccordionIcon style={{position:'absolute',left:'82%'}}/></div></AccordionButton><AccordionPanel pb={4} fontSize='0.72rem' color='white' textShadow='0px 1px 1px black'>-The landscapes X is entirely free for using</AccordionPanel></AccordionItem>
    <AccordionItem width='85%' marginLeft='7%'><AccordionButton  fontSize='0.85rem' textShadow='0px 1px 1px black' color='white'><div textAlign='left'>Why Landscapes X?<AccordionIcon style={{position:'absolute',left:'82%'}}/></div></AccordionButton><AccordionPanel pb={4} fontSize='0.72rem' color='white' textShadow='0px 1px 1px black'>-The landscapes X helps to you share and sell your metaverse items (Lands,Events,etc) faster and easier Or if you are looking for certain items in Metavars, it will help to you find it faster and easier</AccordionPanel></AccordionItem>
    <AccordionItem width='85%' marginLeft='7%'><AccordionButton  fontSize='0.85rem' textShadow='0px 1px 1px black' color='white'><div textAlign='left'>Does purchase transactions in Landscapes X?<AccordionIcon style={{position:'absolute',left:'82%'}}/></div></AccordionButton><AccordionPanel pb={4} fontSize='0.72rem' color='white' textShadow='0px 1px 1px black'>-No,Currently no transactions take place inside the landscapes X and all transactions take place inside the marketplace related to Metavarse (Like:decentraland marketplace and Sandbox marketplace and etc)</AccordionPanel></AccordionItem>
    </Accordion>

    </AccordionPanel>
  </AccordionItem>


  <AccordionItem boxShadow='0 -5px 15px 1px rgba(0, 0, 0, 0.2)'>
   
      <AccordionButton borderTop='white solid 1px'>

        <Flex justifyContent="center" width="100%" fontSize='0.9rem' textShadow='0px 1px 1px #8a8a8a' color='white'>
        CONTACT US
        <AccordionIcon />
        </Flex>
    
        </AccordionButton >

    <AccordionPanel pb={4} fontSize='0.85rem' textShadow='0px 1px 1px black' color='white'>
    <center>contact us with your email for more info and ask your questions</center><br />
    test@gmail.com
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem boxShadow='0 -5px 15px 1px rgba(0, 0, 0, 0.2)'>
   
   <AccordionButton borderTop='white solid 1px' borderBottom='white solid 1px'>

     <Flex justifyContent="center" width="100%" fontSize='0.9rem' textShadow='0px 1px 1px #8a8a8a' color='white'>
     TERMS & CONDITION
     <AccordionIcon />
     </Flex>
 
     </AccordionButton >

 <AccordionPanel pb={4} fontSize='0.85rem' textShadow='0px 1px 1px black' color='white'>
 <center>XOOOOXOOXOOOX</center>
 </AccordionPanel>
</AccordionItem>




</Accordion>
<p style={{color:"white",marginTop:'1rem',paddingLeft:'0.7rem',textShadow:'0px 2px 2px 616161',fontSize:'0.75rem'}}>&copy; Landscapes X {new Date().getFullYear()}</p>
</Box>

        </>
    )
}
export default Section1;
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Image } from '@chakra-ui/image';
import Uplandseemorestyle from '../styles/upland/Uplandseemore.module.css'
import { Flex, HStack } from '@chakra-ui/layout';
import { ChakraProvider,Text } from '@chakra-ui/react';
import {Tag,Input,Radio, RadioGroup} from '@chakra-ui/react'
import { TiLocationOutline } from 'react-icons/ti'
import { IoResize,IoBookmarkOutline,IoBookmarkSharp } from 'react-icons/io5'
import { ImPriceTag } from 'react-icons/im'
import { AiOutlineHeart,AiFillHeart,AiOutlineComment,AiOutlineShoppingCart,AiOutlineSend } from 'react-icons/ai'
import { useState } from 'react';
function UplandSeemore(){
    const [fillheart, setFillheart] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [offer, setOffer] = useState(false)
    return(
        <div>
            <Navbar />
            <div className={Uplandseemorestyle.container}>

                <div className={Uplandseemorestyle.box1}>
                    <center>
                        <Image className={Uplandseemorestyle.photo}  src='10409scottage.jpg'/>
                    </center>
                    <div className={Uplandseemorestyle.activities}>
                    <div onClick={()=> setFillheart(!fillheart)} style={{zIndex:'1',marginLeft:"1rem"}}>{fillheart ? <AiFillHeart style={{fontSize:'1.3rem',color:'red'}}/> : <AiOutlineHeart style={{fontSize:'1.3rem',color:'#36c6ff'}}/>}</div><Text fontSize='0.8rem' style={{wordSpacing:'0.25rem'}}> 9999 </Text>
                    <div style={{zIndex:'1',marginLeft:"1.5rem"}}><AiOutlineComment style={{fontSize:'1.3rem',color:'#36c6ff'}}/></div><Text fontSize='0.8rem' style={{wordSpacing:'0.25rem'}}> 9K </Text>
                    <div onClick={()=> setBookmark(!bookmark)} style={{zIndex:'1',marginLeft:"1.5rem"}}>{bookmark ? <IoBookmarkSharp style={{fontSize:'1.3rem',color:'#36c6ff'}}/> : <IoBookmarkOutline style={{fontSize:'1.3rem',color:'#36c6ff'}}/>}</div>
                    </div>
                </div>

                <div className={Uplandseemorestyle.box2}>
                    <div className={Uplandseemorestyle.content}>
                        <ChakraProvider>
                        <HStack>
                          <Image className={Uplandseemorestyle.profilo} src='IMG_20220206_16124111a.jpg'/>
                          <span className={Uplandseemorestyle.profilename}>Abel tesfay</span>
                          <Flex display={{base:"none" , padS:"flex"}} justifyContent="center" position='relative' left='0vw'>
                              <Tag size='sm' bg='#1e90ff'   className={Uplandseemorestyle.tags}>Followers 10M</Tag>
                              <Tag size='sm' bg='#1e90ff'   className={Uplandseemorestyle.tags}>Followings 23</Tag>
                         </Flex>
                        </HStack>
                        </ChakraProvider>
                        <HStack marginTop='2rem'>
                        <TiLocationOutline style={{fontSize:'1.3rem',color:'#36c6ff'}}/><Text fontSize='0.8rem'> Chicago 10409 S Cottage Grove Ave </Text>
                        </HStack>
                        <HStack marginTop='1rem'>
                        <IoResize style={{fontSize:'1.3rem',color:'#36c6ff'}}/> <Text fontSize='0.8rem' style={{wordSpacing:'0.25rem'}}> <strong>37</strong> up^2  </Text> 
                        </HStack>
                        <HStack marginTop='1rem'>
                        <ImPriceTag style={{fontSize:'0.75rem',color:'#36c6ff'}}/><Text fontSize='0.8rem' style={{wordSpacing:'0.25rem'}}> <strong>999 M</strong> UPX  </Text>
                        </HStack>
                        <HStack marginTop='1rem'>
                        <Text fontSize='0.8rem'><strong>Description:</strong> every description you need it you can write over here ,every description you need it you can write over here ,every description you need it you can write over here ,every description you need it you can write over here</Text>
                        </HStack>
                    </div>
                </div>
            </div>
            <center>
            <div style={{display:'flex'}}>
            <button className={Uplandseemorestyle.cart}><AiOutlineShoppingCart fontSize='1.3rem'/>BUY</button>
            <button className={Uplandseemorestyle.offer} onClick={()=> setOffer(!offer)}><ImPriceTag fontSize='1.1rem'/>OFFER</button>
            </div>
            </center>
            
            <div className={Uplandseemorestyle.area}>
                <textarea className={Uplandseemorestyle.commentarea} placeholder='Discussions'></textarea>
                <div className={Uplandseemorestyle.send}>
                <center>    
                <button className={Uplandseemorestyle.sendbutton}><AiOutlineSend fontSize='1.3rem'/>Send</button>
                </center>
                </div>
            </div>

            <div className={Uplandseemorestyle.commentscontainer}>
            <HStack>
                <Image className={Uplandseemorestyle.profilocomment} src='IMG_20220206_16124111a.jpg'/>
                <span className={Uplandseemorestyle.profilenamecomment}>Abel tesfay</span>   
            </HStack>
            <Text padding='15px' fontSize='.8rem'>Hey sup holmes</Text>
            </div>

            <div className={Uplandseemorestyle.commentscontainer}>
            <HStack>
                <Image className={Uplandseemorestyle.profilocomment} src='IMG_20220206_16124111a.jpg'/>
                <span className={Uplandseemorestyle.profilenamecomment}>Abel tesfay</span>   
            </HStack>
            <Text padding='15px' fontSize='.8rem'>Hey sup holmes</Text>
            </div>
            <Footer />

            {
            /*====== Offer Section =======*/
            offer && 
            <div style={{position:"fixed" , height:"100%" , width:"100%" , background:"rgba(0,0 ,0 ,0.5)", top:"0" , left:"0",zIndex:'3'}} onClick={() => setOffer(!offer)}>
                <center>
                <div className={Uplandseemorestyle.offerform} onClick={(e) => e.stopPropagation()}>
                    <Input type='number' min='0' size='sm' placeholder="record your offer" className={Uplandseemorestyle.offerinput} /><br />
                    <RadioGroup defaultValue='2'>
                        <Radio colorScheme='white' value='1' size='sm' marginTop='1rem' marginLeft='-5%'>USD</Radio>
                        <Radio colorScheme='white' value='2' size='sm' marginTop='1rem' marginLeft='10%'>UPX</Radio>
                    </RadioGroup>
                    <button className={Uplandseemorestyle.recordoffer}><AiOutlineSend fontSize='1.3rem'/>Send</button>
                    <div style={{height:".5rem"}}></div>
                </div>
                </center>   
            </div>
            }

        </div>
    )
}
export default UplandSeemore;
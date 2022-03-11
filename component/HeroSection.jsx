
import HerosectionStyle from '../styles/HeroSection.module.css'
import pic from '../public/hero1.jpg'
import Typing from 'react-typing-animation';
import { BiChevronRight } from 'react-icons/bi';
import { RandomReveal } from 'react-random-reveal'
import { useEffect, useState } from 'react';
function HeroSection(){

   const [ loop ,setLoop] =useState(true)


useEffect(()=>{

setInterval(() => {
    setLoop(!loop)
}, 60000);


},[loop])


    return(
        <div className={HerosectionStyle.pic} backgroud={pic}>
            <div className={HerosectionStyle.hero}>
            <div className={HerosectionStyle.herobox1}><center><p className={HerosectionStyle.name}><RandomReveal isPlaying duration={10} delay='5000' characters="Landscapes X" style={{color:'white'}} /></p><p className={HerosectionStyle.title}>The virtual destination for digital assets Buy and sell LAND, Estates and etc</p></center></div>
            <div className={HerosectionStyle.herobox2}>             
            {  loop ? <Typing className={HerosectionStyle.txt} speed='20'>
              <span>Welcome to Landscapes X</span>
              <Typing.Backspace count={50} delay={2000}/>Register your metaverse lands and items for sale in Landscapes X
              <Typing.Backspace count={100} delay={2000}/>sale your items faster in Landscapes X
              <Typing.Backspace count={70} delay={2000}/>Landscapes X is free for everyone 
              <Typing.Backspace count={70} delay={2000}/>enjoy from Landscapes X 
            </Typing>   : <>  <Typing className={HerosectionStyle.txt} speed='20'>
              <span>Welcome to Landscapes X</span>
              <Typing.Backspace count={50} delay={2000}/>Register your metaverse lands and items for sale in Landscapes X
              <Typing.Backspace count={100} delay={2000}/>sale your items faster in Landscapes X
              <Typing.Backspace count={70} delay={2000}/>Landscapes X is free for everyone 
              <Typing.Backspace count={70} delay={2000}/>enjoy from Landscapes X 
            </Typing> </> }<br />
            <center>
            <button className={HerosectionStyle.start}><div className={HerosectionStyle.startbutton}><BiChevronRight className={HerosectionStyle.chevron}/>GET STARTED</div></button>
            </center>
            </div>
            </div>
        </div>
    )
}
export default HeroSection;
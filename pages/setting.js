import SettingStyle from '../styles/Setting.module.css'
import { MdAccountCircle } from 'react-icons/md'
import { AiFillBell } from 'react-icons/ai'
import { ImPriceTag } from 'react-icons/im'
import {Input,Switch,HStack} from '@chakra-ui/react'
import {  useEffect, useState } from "react";
import Navbar from '../component/Navbar'
import { Image } from '@chakra-ui/image';
import { FileUploader } from "react-drag-drop-files";


const fileTypes = ["JPG", "PNG", "GIF"];

function Setting(){
    const [button, setButton] = useState(false);
    const [editprofile, setEditprofile] = useState(false);

    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    if (button == false){
        setButton("button1")
    }
    return(
        <div>
            <Navbar />
        <div className={SettingStyle.settingcontainer}>
            <div className={SettingStyle.settingbox1}>
                <p className={SettingStyle.title}>settings</p>
                <button onClick={() => setButton("button1")} style={{color: button === 'button1' ? 'white' : 'black' ,backgroundColor: button === 'button1' ? '#1e90ff' : '#eff2f9' }} className={SettingStyle.settingbutton}><MdAccountCircle style={{marginRight:'.4rem',fontSize:'1.1rem'}}/>Profile</button>
                <button onClick={() => setButton("button2")} style={{color: button === 'button2' ? 'white' : 'black' ,backgroundColor: button === 'button2' ? '#1e90ff' : '#eff2f9'}} className={SettingStyle.settingbutton}><ImPriceTag style={{marginRight:'.4rem'}}/>Offers</button>
                <button onClick={() => setButton("button3")} style={{color: button === 'button3' ? 'white' : 'black' ,backgroundColor: button === 'button3' ? '#1e90ff' : '#eff2f9'}} className={SettingStyle.settingbutton}><AiFillBell style={{marginRight:'.4rem'}}/>Notifications</button>
            </div>

            <div className={SettingStyle.settingbox2}>

            {button === "button1" && 
                <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()}>
                    <h1 className={SettingStyle.profiletitle}>Profile Settings</h1>
                    <div className={SettingStyle.profilesetting}>
                        <div className={SettingStyle.profilesection}>
                            <center>
                            <p className={SettingStyle.profilotitle}>Profile Image</p>
                            <Image className={SettingStyle.profilo} src='IMG_20220206_16124111a.jpg' onClick={() => setEditprofile(!editprofile)}/>
                            <p className={SettingStyle.profilotitle}>Profile Banner</p>
                            <Image className={SettingStyle.banner} src='sand.jpg' onClick={() => setEditprofile(!editprofile)}/>
                            </center>
                        </div>
                        <div className={SettingStyle.inputsection}>
                            <div style={{marginTop:'0rem'}}>
                            <span className={SettingStyle.inputlabel}>Username</span><label style={{color:'#1e90ff'}}>*</label><br />
                            <Input size='sm' placeholder="Your nickname" className={SettingStyle.inputstyle} />
                            </div>

                            <div style={{marginTop:'1rem'}}>
                            <span className={SettingStyle.inputlabel}>Bio</span><br />
                            <Input size='sm' placeholder="Tell the metaverse world your story" className={SettingStyle.inputstyle} />
                            </div>

                            <div style={{marginTop:'1rem'}}>
                            <span className={SettingStyle.inputlabel}>Email Address</span><label style={{color:'#1e90ff'}}>*</label><br />
                            <Input size='sm' placeholder="Example@email.com" className={SettingStyle.inputstyle} />
                            </div>

                            <div style={{marginTop:'1rem'}}>
                            <span className={SettingStyle.inputlabel}>Twitter</span><br />
                            <Input size='sm' placeholder="https://twitter.com/LandscapeX" className={SettingStyle.inputstyle} />
                            </div>

                            <div style={{marginTop:'1rem'}}>
                            <span className={SettingStyle.inputlabel}>Discord</span><label style={{color:'#1e90ff'}}>*</label><br />
                            <Input size='sm' placeholder="name#0000" className={SettingStyle.inputstyle} />
                            </div>

                            <center>    
                            <button className={SettingStyle.updatebutton}>Update</button>
                            </center>

                            {/*===Edit profile===*/
                            editprofile && 
                            <div style={{position:"fixed" , height:"100%" , width:"100%" , background:"rgba(0,0 ,0 ,0.5)", top:"0" , left:"0",zIndex:'3'}} onClick={() => setEditprofile(!editprofile)}>
                                <center>
                                <div className={SettingStyle.dropform} onClick={(e) => e.stopPropagation()}>
                                <FileUploader handleChange={handleChange} name="file" types={fileTypes} minSize='.2'/>
                                </div>
                                </center>    
                            </div>}
                        </div>
                    </div>
                </div>
            }

            {button === "button2" && 
            <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()}>
                <div className={SettingStyle.profilesetting} style={{marginTop:'4rem'}}>2</div>
            </div>
            }

            {button === "button3" && 
            <div onClick={() => setButton1(!button1)} onClick={(e) => e.stopPropagation()}>
                <h1 className={SettingStyle.profiletitle}>Notifications Settings</h1>
                <div className={SettingStyle.profilesetting} style={{height:'8rem'}}>
                    <span style={{fontSize:'.8rem',padding:'15px'}}>Discord Notifications</span><br />
                    <Switch size='md' style={{fontSize:'.8rem',padding:'15px'}}/>
                </div>
            </div>
            }
            </div>
        </div>
        </div>
    )
}
export default Setting;
import CategoryStyle from '../styles/Category.module.css';
import { Image } from '@chakra-ui/image';
import { FiChevronsUp } from 'react-icons/fi';
function Category(){
    return(
        <div>
        <div className={CategoryStyle.Category}>
            <div className={CategoryStyle.Categorybox1}>
                <div className={CategoryStyle.section1}>
                    <div className={CategoryStyle.content1}></div>
                    <Image src='dec.jpg' className={CategoryStyle.picture}/>
                    <p className={CategoryStyle.platformname}>Decentraland</p>
                </div>
            </div>

            <div className={CategoryStyle.Categorybox2}>
                <div className={CategoryStyle.section1}>
                    <div className={CategoryStyle.content1}></div>
                    <Image src='sand.jpg' className={CategoryStyle.picture}/>
                    <p className={CategoryStyle.platformname}>Sandbox</p>
                </div>
            </div>
        </div>

        <div className={CategoryStyle.Category}>
            <div className={CategoryStyle.Categorybox1}>
                <div className={CategoryStyle.section1}>
                    <div className={CategoryStyle.content1}></div>
                    <Image src='axie.jpg' className={CategoryStyle.picture}/>
                    <span className={CategoryStyle.platformname}>Axie infinity</span>
                </div>
            </div>
            
            <div className={CategoryStyle.Categorybox2}>
                <div className={CategoryStyle.section1}>
                    <div className={CategoryStyle.content1}></div>
                    <Image src='up.jpg' className={CategoryStyle.picture}/>
                    <p className={CategoryStyle.platformname}>Upland</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Category;
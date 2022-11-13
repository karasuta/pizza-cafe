
import { useState} from 'react';
import { dataCafe } from './dataCafe';
import './App.css';
import Prev from './previous.png';
import Next from './next.png';
import Kids from './Kids';
function About(){
const [picture, setPicture] = useState(0);
const {image,description}= dataCafe[picture];


const previousPicture=()=>{
    setPicture(picture=>{
        picture--;
        if(picture<0){
            picture=dataCafe.length-1
        };
        return picture;
    });

}
const nextPicture=()=>{
    setPicture (picture=>{
        picture++;
        if(picture>dataCafe.length-1){
            picture=0;
        };
        return picture;
    });
}

return(<div className='container_about'>
    <div className='picture_container'>
    <button className='btn' onClick={previousPicture}><img className='btn_img'src={Prev} alt="previous"/></button>
    <img className="picture_about" src={image} alt="cafe"/>
    <button  className='btn' onClick={nextPicture}><img className='btn_img'src={Next} alt="next"/></button>

    </div>
<div className='text_container'>
    <p>{description}</p>
</div>
<div>
    <Kids/>
</div>
</div>
);
}
export default About;

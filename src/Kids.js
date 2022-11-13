
import { useState } from "react";
import { dataAbout } from "./dataAbout";
import './App.css';
function Kids (){
    const [ event, setEvent ] = useState(dataAbout);
    const [ showText, setShowtext ] = useState (false);

    const showTextClick = (item)=>{
        item.showMore = ! item.showMore;
        setShowtext(!showText);
    }
    return(
        <div>
            <div className="title">
                <h2>Для детей</h2>
            </div>
                <div>
                {event.map((item=>{
                    const{id,title,paragraph,img,showMore}=item;
                    return(<div key={id} className="container_kids">
                        <div className="title_sm_kids">
                            <h3>{title}</h3>
                        </div>
                        <div className="container">
                            <img src={img}  className="picture_about" alt='kids' />
                        </div>
                        <div className="text_container_kids">
                            <p className="kids">{showMore ? paragraph : paragraph.substring(0,50)+'...'}
                            <button className="btn_kids" onClick={()=>showTextClick(item)}>{showMore?"Скрыть":"Подробнее"}</button>
                            </p>
                        </div>
                    </div>)
                }))}
                <div className="container btn_change">
                    <button className="change" onClick={()=>setEvent([])}>Скрыть</button>
                </div>
            </div>
        </div>
    )

}
export default Kids;

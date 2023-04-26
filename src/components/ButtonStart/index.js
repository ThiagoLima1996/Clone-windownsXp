import React from "react";
import './Button-start.css'
import {btnImgStart} from '../../data' 




const ButtonStart = () => {
   
    return(
        // button menu iniciar
        <button className="btn-start" id="btn-start">
            <img src={btnImgStart.img} alt="" className="btn-start-img"/>&nbsp;
            Iniciar
        </button> 
    )
}

export default ButtonStart
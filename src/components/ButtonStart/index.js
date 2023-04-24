import React from "react";
import './Button-start.css'
import {btnImgStart} from '../../data' 
import { openMenu } from "../Menu";

const ButtonStart = () => {
    
    return(
        // button menu iniciar
        <button onClick={openMenu} className="btn-start" id="btn-start">
            <img src={btnImgStart.img} alt="" className="btn-start-img"/>&nbsp;
            Iniciar
        </button> 
    )
}

export default ButtonStart
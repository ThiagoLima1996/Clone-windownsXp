import React, { useState } from "react";
import './Icons.css'
import './Janela.css'
import { internetExplore } from "../../data";

const Explore = () => {

    const [icon, setIcon] = useState("icons-title")

    const select = () =>{
        if (icon === "icons-title") {
            return setIcon("icons-title icon-select")
        } else {
            return setIcon("icons-title")
        }
        
    }

    return (
        <div>
            <div onClick={select} className='icons'>
                <img
                    src={internetExplore}
                    alt="Internet Explore"
                    className='icons-img' />
                <span
                    className={icon} >Explore</span>
            </div>
        </div>
    )
}

export default Explore
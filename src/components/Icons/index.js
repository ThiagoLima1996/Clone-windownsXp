import React, { useState } from 'react'
import './Icons.css'
//import para criação dos icones da area de trabalho
import { iconsDesktop } from '../../data';


const Icons = () => {

    const [icon, setIcon] = useState("icons-title")

    const select = () =>{
        return setIcon("icons-title icon-select")
    }


    return (
        iconsDesktop.map((props, index) => {
            return (
                <div onClick={select} className='icons'>
                    <img
                        src={props.img}
                        alt=""
                        key={index}
                        className='icons-img' />
                    <span
                        key={index}
                        className={icon} >{props.nome}</span>
                </div>
            )
        })

    );
}

export default Icons;
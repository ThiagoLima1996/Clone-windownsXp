import React from 'react'
import './Icons.css'
//import para criação dos icones da area de trabalho
import { iconsDesktop } from '../../data';


const Icons = () => {
    return (
        iconsDesktop.map((props, index) => {
            return (
                <div className='icons'>
                    <img
                        src={props.img}
                        alt=""
                        key={index}
                        className='icons-img' />
                    <span
                        key={index}
                        className='icons-title icon-select'>{props.nome}</span>
                </div>
            )
        })

    );
}

export default Icons;
import React from "react";
import './IconsMenu.css'
import { iconsMenu } from "../../data";



const IconsMenu = () => {
    return (
        iconsMenu.map((prosp, index) => {
            return (
                <div className="icon-menu">
                    <img src={prosp.img} alt="" key={index} />
                    <span className="description">
                        <strong>{prosp.titulo}</strong>
                        <br /> {prosp.subtitulo}
                    </span>
                </div>
            )
        })
    )
}

export default IconsMenu;
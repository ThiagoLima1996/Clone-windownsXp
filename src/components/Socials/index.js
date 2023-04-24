import React from "react";
import './Socials.css'
import Clock from "../Clock";



const Socials = () => {
    return(
        <div className="taskbar_socials">
            <div className="icons_socials icon_volume"></div>
            <div className="icons_socials icon_midia"></div>
            <div className="icons_socials icon_secure"></div>
            <Clock />
        </div>
    )
}

export default Socials;
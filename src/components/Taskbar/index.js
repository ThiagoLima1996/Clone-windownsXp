import React from "react";
import './Taskbar.css'
import Socials from "../Socials";
import ButtonStart from "../ButtonStart";

const Taskbar = () => {
    return(
        <div className="taskbar">
            <ButtonStart />
            <Socials />
        </div>
    );
}

export default Taskbar;
import React from "react";
import './Menu.css'
import BtnFooter from "../BtnFooter";
import IconsMenu from "../IconsMenu";
import { useState } from "react";





const Menu = () => {
    
    const [menu, setMenu] = useState("menu menu-active")

    const active = () => {
        console.log("ok");
    }
    

    return (
        //menu inciar do windons
        <div className={menu}>
            {/* top do menu inciar */}
            <div className="top">
                <div className="top-img"></div>
                <h2 className="top-text">Thiago Lima</h2>
            </div>
            {/* Meio do menu iniciar */}
            <div className="mid">
                {/* lado esquerdo */}
                <div className="mid-left mid-column">
                    <IconsMenu />
                </div>
                {/* lado direito */}
                <div className="mid-column">

                </div>
            </div>
            {/* roda pé do menu iniciar */}
            <div className="footer">
                <BtnFooter />
            </div>

        </div>
    );
}

export default Menu;
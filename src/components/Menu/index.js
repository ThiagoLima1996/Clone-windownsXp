import React from "react";
import './Menu.css'
import { btnFooter } from "../../data";
import BtnFooter from "../BtnFooter";
import IconsMenu from "../IconsMenu";

export const openMenu = () => {
    console.log("teste")
}


const Menu = () => {
     


    return (
        //menu inciar do windons
        <div className="menu menu-active">
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
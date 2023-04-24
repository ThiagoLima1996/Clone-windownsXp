import React from "react";
import './Menu.css'
import { btnFooter } from "../../data";
import BtnFooter from "../BtnFooter";

const Menu = () => {
    return (
        //menu inciar do windons
        <div className="menu">
            {/* top do menu inciar */}
            <div className="top">
                <div className="top-img"></div>
                <h2 className="top-text">Thiago Lima</h2>
            </div>
            {/* Meio do menu iniciar */}
            <div>
                {/* lado esquerdo */}
                <div>

                </div>
                {/* lado direito */}
                <div>

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
import React, { useState } from "react";
import './Button-start.css'
import './Menu.css'
import { btnImgStart } from '../../data'
import IconsMenu from "../IconsMenu";
import BtnFooter from '../BtnFooter'



const ButtonStart = () => {
    const [menu, setMenu] = useState('menu menu-active')
    const active = () => {
        if (menu == "menu menu-active") {
            return setMenu('menu')
        } else {
            return setMenu('menu menu-active')
        }
    }


    return (
        <div>
            <button onClick={active} className="btn-start" id="btn-start">
                <img src={btnImgStart.img} alt="" className="btn-start-img" />&nbsp;
                Iniciar
            </button>
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
        </div>
    )
}

export default ButtonStart
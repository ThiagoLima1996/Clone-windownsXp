import React from "react";
import './BtnFooter.css'
import { btnFooter } from "../../data";



const BtnFooter = () => {
    return (
        btnFooter.map((props, index) => {
            return (
                < div className="btn-footer" id={props.id} key={index}>
                    <img src={props.img} alt="" />
                    <a href="#" key={index}>{props.nome}</a>
                </div >
            )
        })
    )
}

export default BtnFooter;
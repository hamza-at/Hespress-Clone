import React, {useEffect, useState} from "react";
import './styles.css';

import sandwich from "../../../../assets/images/sandwich.svg";
import {NavLink} from "react-router-dom";



const NavBar = ({onClick}) => {
useEffect(()=>{},[])

function NavLinks(){
        return(
            <div className="d-flex">
                <div className="navbar navbar-light  bg-light navbar-expand pl-2 " id="second"
                     data-aa-component="horizontal-scroll">

                    <ul className="nav navbar-nav">
                        <li>

                            <img src={sandwich} onClick={onClick} alt="sandwich"/>
                        </li>

                        <li className="menu-item nav-item-second"><a className="nav-link"
                                                                     href="/">الرئيسية</a></li>
                        <li className="menu-item nav-item "><a  href="/politics"
                         className="nav-link">
                            سياسة</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/Regions">جهات</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/societe">مجتمع</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/economie">اقتصاد</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/faits-divers">حوادث</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/medias">السلطة
                            الرابعة</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/art">فن
                            و ثقافة</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/tamazight">تمازيغت</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/sport">رياضة</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/sawt-soura">صوت
                            و صورة</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="/international">خارج
                            الحدود</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

    return (
        <div className="Sidebar">
            <div className="nav-item  dropdown-toggle-split drawer"/>
            {NavLinks()}

        </div>



);

}
export default NavBar;
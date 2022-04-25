import React, {useEffect, useState} from "react";
import './styles.css';
import Popup from "reactjs-popup";
import SideBar from "../CustomSideBar";
import Sidebar from "react-sidebar";
import sandwich from "../../../../assets/images/sandwich.svg";



const NavBar = ({onClick}) => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    function onSetSidebarOpen(open) {
        setSidebarOpen(open)

    }
    function Change(){
        setSidebarOpen(false)
    }

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
                        <li className="menu-item nav-item "><a className="nav-link"
                                                               href="https://www.hespress.com/politique">سياسة</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/regions">جهات</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/societe">مجتمع</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/economie">اقتصاد</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/faits-divers">حوادث</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/medias">السلطة
                            الرابعة</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/art-et-culture">فن
                            و ثقافة</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/tamazight">تمازيغت</a>
                        </li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/sport">رياضة</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/sawt-soura">صوت
                            و صورة</a></li>
                        <li className="menu-item nav-item"><a className="nav-link"
                                                              href="https://www.hespress.com/international">خارج
                            الحدود</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
}

    return (
        <div className="Sidebar">
            <div className="nav-item  dropdown-toggle-split drawer">
                {/*<Sidebar
                    sidebar={<div><CustomSideBar close={Change}/></div>}
                    open={sidebarOpen}
                    onSetOpen={onSetSidebarOpen}
                    pullRight={true}
                    styles={{
                        root: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            overflow: "hidden",


                        },
                        sidebar: {
                            zIndex: 2,
                            position: "fixed",
                            top: 0,
                            bottom: 0,
                            width: "30%",
                            transition: "transform .3s ease-out",
                            WebkitTransition: "-webkit-transform .3s ease-out",
                            willChange: "transform",
                            overflowY: "auto",
                            background: "white",
                        },
                        content: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            overflowY: "auto",
                            WebkitOverflowScrolling: "touch",
                            transition: "left .3s ease-out, right .3s ease-out",
                            right: 'Opx'
                        },
                        overlay: {
                            zIndex: 1,
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0,
                            visibility: "hidden",
                            transition: "opacity .3s ease-out, visibility .3s ease-out",
                            backgroundColor: "rgba(30,34,180,0.8)",

                        },
                        dragHandle: {
                            zIndex: 1,
                            position: "fixed",
                            top: 0,
                            bottom: 0
                        }
                    }}

                >
                    <b> </b>
                </Sidebar>*/}
    </div>

            {NavLinks()}

        </div>



);

}
export default NavBar;
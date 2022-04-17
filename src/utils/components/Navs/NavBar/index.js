import React, {useEffect, useState} from "react";
import './styles.css';
import Popup from "reactjs-popup";
import SideBar from "../SideBar";
import BurgerButton from "../../burgerButton";


const NavBar = () => {
    const [ShowNav, setShowNav] = useState(true);


useEffect(()=>{},[ShowNav])

    const contentStyle = {
        background: "rgba(255,255,255,0",
        width: "80%",
        border: "none"
    };


    return (
        <div> <div className="nav-item menu-item dropdown-toggle-split">
        <Popup onOpen={() => setShowNav(false)}
               onClose={() => setShowNav(true)}
               modal
               overlayStyle={{background: "rgba(255,255,255,0.98"}}
               contentStyle={contentStyle}
               closeOnDocumentClick={false}
               trigger={open => (
                   <BurgerButton open={open}/>)}
        >
            {(close) => <SideBar close={close}/>}
        </Popup>
    </div>
            {ShowNav ?
                <div className="d-flex">
                    <div className="navbar navbar-light  bg-light navbar-expand pl-2" id="second"
                         data-aa-component="horizontal-scroll">

                        <ul className="nav navbar-nav">

                            <li className="nav-item menu-item dropdown-toggle-split">
                                <div>

                                </div>
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
                                وثقافة</a>
                            </li>
                            <li className="menu-item nav-item"><a className="nav-link"
                                                                  href="https://www.hespress.com/tamazight">تمازيغت</a>
                            </li>
                            <li className="menu-item nav-item"><a className="nav-link"
                                                                  href="https://www.hespress.com/sport">رياضة</a></li>
                            <li className="menu-item nav-item"><a className="nav-link"
                                                                  href="https://www.hespress.com/sawt-soura">صوت
                                وصورة</a></li>
                            <li className="menu-item nav-item"><a className="nav-link"
                                                                  href="https://www.hespress.com/international">خارج
                                الحدود</a>
                            </li>
                        </ul>
                    </div>
                </div> : null}

        </div>



);

}
export default NavBar;
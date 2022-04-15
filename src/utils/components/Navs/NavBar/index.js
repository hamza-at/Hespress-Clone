import React from "react";

const NavBar = () => {
    return (

        <div className="navbar navbar-light bg-light navbar-expand pl-2" id="second">
            <ul className="nav navbar-nav">
                <li className="nav-item nav-item-second">
                    <a className="navbar-toggle p-3 text-black-50 m-1" data-toggle="collapse"
                                                            data-target=".navbar-collapse"> ☰ </a></li>
                <li className="nav-item nav-item-second"><a href="#" className="nav-link">Link</a>
                </li>
                <li className="nav-item nav-item-second"><a href="#" className="nav-link">Link</a>
                </li>
                <li className="nav-item nav-item-second"><a href="#" className="nav-link">Link</a>
                </li>
                <li className="nav-item nav-item-second"><a href="#" className="nav-link">Link</a>
                </li>
                <li className="nav-item nav-item-second"><a href="#" className="nav-link">Link</a>
                </li>
            </ul>
        </div>



);

}
export default NavBar;
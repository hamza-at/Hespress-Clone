import React, {useEffect, useState} from "react";
import './styles.css';
import logo from '../../../../assets/images/hespresss.svg';
import dark from '../../../../assets/images/darkmode.svg';
import search from '../../../../assets/images/search.svg';

const TopBar = () => {
    const [visible, setVisible] = useState(true);
    const [width, setWidth] = useState(window.innerHeight);

    const handleVisibility = () => {
        setVisible(prev => !prev);
    };
    const handleWidth = () => {
        setWidth(window.innerWidth);
        console.log(window.innerWidth);
    };
    useEffect(() => {
        //console.log(visible);
        window.addEventListener("resize", handleWidth);
        width <= 600 ? setVisible(false) : setVisible(true);
        console.log(visible);

        return () => {
            window.removeEventListener("resize", handleWidth);
        };
    }, [width]);

    return (

            <div className="navbar navbar-dark  navbar-expand-sm py-3 containeer" id="first">
                <div><a href="/" className="navbar-brand "><img src={logo} alt="hespress"/></a>
                 </div>
                <div className="navbar-collapse collapse justify-content-end ">
                    <ul className="nav navbar-nav nav-topp " >
                        <li className="nav-item nav-item-top"><a href="#" className="nav-link" ><img src={dark} alt="darkmode"/></a>
                        </li>

                    </ul>
                    <div className="searchEngine">
                    <div className="magnifierContainer ">
                            <i className="btn btn-outline-dark" onClick={handleVisibility}><img src={search} alt="searchicon"/></i>
                    </div>
                    <aside style={visible ? {display: `block`,transition: `display 0.35s ease-out` } : {display: `none`,transition: `display 0.35s ease-out` }}>
                        <input  type="search" placeholder="Search" aria-label="Search" className="searchInput" />
                    </aside>
                    </div>
                </div>
            </div>



    );

}
export default TopBar;
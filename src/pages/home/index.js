import React from 'react';
import TopBar from "../../utils/components/Navs/topBar";
import NavBar from "../../utils/components/Navs/NavBar";
import './styles.css';
import Footer from "../../utils/components/Footer";
import Sidebar from "react-sidebar";
import CustomSideBar from "../../utils/components/Navs/CustomSideBar";
import {useState} from "react";


const Home =() => {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    function onSetSidebarOpen(open) {
        setSidebarOpen(open)

    }
    function Change(){
        setSidebarOpen(false)
    }


    return (
        <div>
            <Sidebar
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
                        position: "fixed",
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
                <div>
            <div className="fixed-top" data-toggle="affix">
                <TopBar />
                <NavBar onClick={() => onSetSidebarOpen(true)}/>
            </div>
            <section>
                <div className="container-fluid">
                    <p>Here is some content</p>


                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free
                        Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of
                        them, vegan
                        farm-to-table Williamsburg slow-carb readymade
                        disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever.
                        Helvetica cray
                        plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi
                        McSweeney's
                        Shoreditch selfies, forage fingerstache
                        food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.
                    </p>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <p>Here is some more content</p>
                </div>
            </section>
        <Footer/></div></Sidebar>
        </div>

    );
}
export default Home;
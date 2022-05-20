import React from "react";
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import {
    Economie,
    Home,
    notFound,
    Societe,
    Regions,
    Faitsdivers,
    Medias,
    Art,
    Tamazight,
    Sport,
    Sawtsoura, International, Politics
} from "../pages";
import Sidebar from "react-sidebar";
import CustomSideBar from "../utils/components/Navs/CustomSideBar";
import TopBar from "../utils/components/Navs/topBar";
import NavBar from "../utils/components/Navs/NavBar";
import Footer from "../utils/components/Footer";
import {useState} from "react";


const Navigation = ()=> {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    function onSetSidebarOpen(open) {
        setSidebarOpen(open)

    }
    function Change(){
        setSidebarOpen(false)
    }
    return (
        <BrowserRouter>

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
                        right: 0
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
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route  path="/politics" component={Politics} />
                        <Route  path="/regions" component={Regions} />
                        <Route  path="/societe" component={Societe} />
                        <Route  path="/economie" component={Economie} />
                        <Route  path="/faits-divers" component={Faitsdivers} />
                        <Route  path="/medias" component={Medias} />
                        <Route  path="/art" component={Art} />
                        <Route  path="/tamazight" component={Tamazight} />
                        <Route  path="/sport" component={Sport} />
                        <Route  path="/sawt-soura" component={Sawtsoura} />
                        <Route  path="/international" component={International} />

                        <Route  component={notFound}  />

                    </Switch>
                    <Footer/></div></Sidebar>


        </BrowserRouter>
    );
}
export default Navigation;
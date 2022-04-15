import React from "react";
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import {Home,notFound} from "../pages";


const Navigation = ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={()=><Home/>} component={Home} />
                <Route  component={notFound} path={'*'} render={()=><notFound/>}  />

            </Switch>
        </BrowserRouter>
    );
}
export default Navigation;
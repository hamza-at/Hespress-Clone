import React from "react";
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import {Home,notFound} from "../pages";


const Navigation = ()=> {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route  component={notFound}  />

            </Switch>
        </BrowserRouter>
    );
}
export default Navigation;
import React from "react";
import { BrowserRouter as Router, Routes as GroupRoutes, Route } from 'react-router-dom';

import Home from "../components/Home";
import Banco from "../components/Banco";
import Bancos from "../components/Bancos";

const Routes = () => {
   return(

    <Router>
        <GroupRoutes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/banco" element={<Banco/>}>
            </Route>
            <Route path="/bancos" element={<Bancos/>}>
            </Route>
        </GroupRoutes>
    </Router>

)}

export default Routes;
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import {Dashboard} from "../screens/Dashboard";
import {Citizens} from "../screens/Citizens";
import {Sidebar} from "../components/Sidebar";
import {CitizenProfile} from "../screens/CitizenProfile/CitizenProfile";


export const Router = (props) => {

    return (
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path='/citizens' element={<Citizens/>}/>
                <Route path="/citizens/:id" element={<CitizenProfile/>} />
            </Routes>
        </BrowserRouter>
    )
}
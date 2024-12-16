import {Router} from "./configs/Router";
import React from "react";
import {Sidebar} from "./components/Sidebar";

import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import "./configs/default.js"
import {TopBoard} from "./components/TopBoard";


export const App = () => {

    return (
        <ConfigProvider locale={ruRU}>
            <Router>
                <TopBoard/>
                <Sidebar/>
            </Router>
        </ConfigProvider>
    )
}
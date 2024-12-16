import "../styles/citizens.scss";

import React from "react";
import {CitizenTableFull} from "../components/CitizenTableFull";


export const Citizens = () => {

    return (
        <div className="citizens__container">
            <h1>Картотека граждан</h1>
            <CitizenTableFull/>
        </div>
    )
}
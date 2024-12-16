import "../styles/statsCard.scss";

import React from "react";
import {CircularProgress} from "./CircularProgress";

export const StatsCard = ({ icon, value, label, percentage, accentColor }) => {
    return (
        <div className={"stats-card"}>
            <div className={"stats-card__left-section"}>
                <div>
                    {icon ?? <></>}
                    <h2>{value}</h2>
                    <p>{label}</p>
                </div>
            </div>
            <CircularProgress value={percentage}/>
        </div>
    );
};
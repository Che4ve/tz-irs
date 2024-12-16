import "../styles/dashboard.scss";

import React from "react";
import {AgeHistogram} from "../components/AgeHistogram";
import {GenderPieChart} from "../components/GenderPieCHart";
import {ConscriptionChart} from "../components/ConscriptionChart";
import {StatsCard} from "../components/StatsCard";
import {CategoryHistogram} from "../components/CategoryHistogram";

import { IoMail } from "react-icons/io5";
import { FaCashRegister } from "react-icons/fa6";
import {CitizenTable} from "../components/CitizenTable";
import {NewsCard} from "../components/NewsCard";
import {NewsBoard} from "../components/NewsBoard";


export const Dashboard = () => {

    return (
        <div className={"dashboard__container"}>
            {/*<svg>*/}

            {/*</svg>*/}
            {/*<svg>*/}
            {/*    */}
            {/*</svg>*/}
            <div className={'dashboard__content'}>
                <StatsCard
                    icon={<IoMail color={"#82d4f5"}/>}
                    value="12,361"
                    label="Заявлений получено"
                    percentage={37}
                />
                <StatsCard
                    icon={<FaCashRegister color={"#82ca9d"}/>}
                    value="3,724"
                    label="Продажи"
                    percentage={12}
                />
                <GenderPieChart/>
                <AgeHistogram/>
                <ConscriptionChart/>
                <CategoryHistogram/>
                <NewsBoard/>
                <CitizenTable/>
            </div>
        </div>
    )
}
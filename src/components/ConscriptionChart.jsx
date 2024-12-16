import React, {useEffect, useState} from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar} from "recharts";
import {getMonthName} from "../configs/default";

const incomeData = [
    { month: 6, income: 83801 },
    { month: 7, income: 94293 },
    { month: 8, income: 100070 },
    { month: 9, income: 112768 },
    { month: 10, income: 125638 },
    { month: 11, income: 136401 },
    { month: 12, income: 154231 },
];

export const ConscriptionChart = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setData((prev) => {
            prev = incomeData.map(value => ({month: getMonthName(value.month).substring(0, 3), income: value.income}))
            return prev;
        })
    }, []);

    return (
        <div className={'conscription-chart'}>
            <AreaChart
                width={630}
                height={225}
                data={data}
                margin={{ top: 20, right: 50, left: 50, bottom: 10 }}
            >
                <defs>
                    <linearGradient id="colorAverageIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>

                <XAxis
                    dataKey="month"
                    tick={{
                        angle: -45,
                        textAnchor: "start",
                    }}
                    tickMargin={25}
                    dx={-10}
                />
                <YAxis dataKey="income" domain={[0, 'dataMax + 10000']} tickMargin={10}/>
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>
                <Area type="monotone" dataKey="income" stroke="#82ca9d" fillOpacity={1} fill="url(#colorAverageIncome)" name="Количество призванных" />
                <CartesianGrid strokeDasharray="3 3"/>
            </AreaChart>
            <h1>
                {incomeData.at(incomeData.length - 1).income.moneyFormat().moneyFormat() + " чел. в этом месяце " ?? " - "}
            </h1>
        </div>
    );
};

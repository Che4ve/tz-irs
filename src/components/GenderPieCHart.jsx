import React from "react";
import {PieChart, Pie, Tooltip, Legend, Cell, Label, LabelList} from "recharts";

import { PiGenderIntersexBold } from "react-icons/pi";

const genderData = [
    { name: "Муж.", value: 767123 },
    { name: "Жен.", value: 60624 },
];

const COLORS = ["#a8d1ff", "#f3a5f1"]; // Цвета для сегментов диаграммы

export const GenderPieChart = () => {
    return (
        <div className={'gender-pie'}>
            <div className={'gender-pie__left-section'}>
                <PiGenderIntersexBold/>
                <h3>Гендерный состав</h3>
            </div>
            <PieChart
                width={150}
                height={150}
            >
                <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={45}
                    fill="#8884d8"
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                >
                    {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                    <LabelList dataKey="value" position="outside" offset={10} fontSize={"0.8rem"}/>
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

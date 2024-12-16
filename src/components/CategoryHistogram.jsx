import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from "recharts";

const categoryData = [
    { category: "А", count: 12045 },
    { category: "Б", count: 8540 },
    { category: "В", count: 6580 },
    { category: "Г", count: 4230 },
    { category: "Д", count: 3120 },
];

const barColors = ["#f89c9a", "#f89c9a", "#adef81", "#ffdb6e", "#a5a5a5"]

export const CategoryHistogram = () => {
    return (
        <div className={'category-histogram'}>
            <BarChart
                width={350}
                height={300}
                data={categoryData}
                layout="vertical"
                margin={{top: 25, right: 50, left: 25, bottom: 20}}
            >
                {/*<CartesianGrid strokeDasharray="1 1"/>*/}
                <XAxis type="number"/>
                <YAxis type="category" dataKey="category"
                       label={{value: "Категория", angle: -90, position: "insideLeft", offset: 17}}/>
                <Tooltip/>
                <Bar
                    dataKey="count"
                    name="Количество граждан"
                    verticalAlign="top"
                    radius={[0, 5, 5, 0]}
                >
                    {
                        categoryData.map((entry, index) => (
                            <Cell key={`category-histogram__cell-${index}`} fill={barColors[index % barColors.length]} />
                        ))
                    }
                </Bar>
            </BarChart>
        </div>
    );
};
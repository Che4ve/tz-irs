import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import {fetchAllData} from "../data/CitizensData";

export const AgeHistogram = () => {
    const [data, setData] = useState([
        { ageRange: "18-30", count: 0 },
        { ageRange: "31-40", count: 0 },
        { ageRange: "41-55", count: 0 },
        { ageRange: "55+", count: 0 },
    ]);

    useEffect(() => {
        fetchAllData().then((result) => {
            const updatedData = [...data];

            result.data.forEach((item) => {
                if (item.age > 55) {
                    updatedData[3].count++; // "55+"
                } else if (item.age > 40) {
                    updatedData[2].count++; // "41-55"
                } else if (item.age > 30) {
                    updatedData[1].count++; // "31-40"
                } else {
                    updatedData[0].count++; // "18-30"
                }
            });

            setData(updatedData);
        });
    }, []);

    return (
        <div className={"age-histogram"}>
            <BarChart
                width={350}
                height={300}
                data={data}
                layout="vertical"
                margin={{ top: 20, right: 50, left: 25, bottom: 20 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="ageRange" />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                    dataKey="count"
                    name="Количество граждан"
                    radius={[0, 5, 5, 0]}
                />
            </BarChart>
        </div>
    );
};
